-- ================================================================
-- IP In-Patient Bill Book Module
-- ================================================================

-- Enums
CREATE TYPE ip_role AS ENUM ('super_admin', 'admin', 'medical', 'finance');
CREATE TYPE ip_patient_status AS ENUM ('active', 'discharged');

-- ----------------------------------------------------------------
-- ip_user_roles
-- Maps Supabase auth users to IP Bill Book roles.
-- email column stored for display (auth.users not queryable via anon key).
-- ----------------------------------------------------------------
CREATE TABLE ip_user_roles (
  id          UUID        PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id     UUID        REFERENCES auth.users(id) ON DELETE CASCADE UNIQUE NOT NULL,
  role        ip_role     NOT NULL,
  email       TEXT        NOT NULL,
  created_at  TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  created_by  UUID        REFERENCES auth.users(id)
);

ALTER TABLE ip_user_roles ENABLE ROW LEVEL SECURITY;

-- ----------------------------------------------------------------
-- ip_patients
-- ----------------------------------------------------------------
CREATE TABLE ip_patients (
  id            UUID              PRIMARY KEY DEFAULT gen_random_uuid(),
  name          TEXT              NOT NULL,
  patient_id    TEXT              NOT NULL UNIQUE,
  age           INTEGER           NOT NULL CHECK (age > 0 AND age < 150),
  gender        TEXT              NOT NULL CHECK (gender IN ('male', 'female', 'other')),
  status        ip_patient_status NOT NULL DEFAULT 'active',
  created_at    TIMESTAMPTZ       NOT NULL DEFAULT NOW(),
  created_by    UUID              REFERENCES auth.users(id),
  discharged_at TIMESTAMPTZ,
  discharged_by UUID              REFERENCES auth.users(id)
);

ALTER TABLE ip_patients ENABLE ROW LEVEL SECURITY;

-- ----------------------------------------------------------------
-- ip_charges
-- Free-form line items per patient. Multiple entries per name allowed
-- (e.g. multiple consultants, multiple pharmacy entries).
-- Medical can INSERT; Finance/Admin can INSERT + UPDATE + DELETE.
-- ----------------------------------------------------------------
CREATE TABLE ip_charges (
  id           UUID           PRIMARY KEY DEFAULT gen_random_uuid(),
  patient_id   UUID           NOT NULL REFERENCES ip_patients(id) ON DELETE CASCADE,
  charge_name  TEXT           NOT NULL,
  amount       NUMERIC(10, 2) NOT NULL DEFAULT 0 CHECK (amount >= 0),
  created_at   TIMESTAMPTZ    NOT NULL DEFAULT NOW(),
  created_by   UUID           REFERENCES auth.users(id),
  updated_at   TIMESTAMPTZ    NOT NULL DEFAULT NOW(),
  updated_by   UUID           REFERENCES auth.users(id)
);

ALTER TABLE ip_charges ENABLE ROW LEVEL SECURITY;

-- ----------------------------------------------------------------
-- ip_payments
-- Records advance (max ₹20,000) and additional payments.
-- ----------------------------------------------------------------
CREATE TABLE ip_payments (
  id            UUID           PRIMARY KEY DEFAULT gen_random_uuid(),
  patient_id    UUID           NOT NULL REFERENCES ip_patients(id) ON DELETE CASCADE,
  amount        NUMERIC(10, 2) NOT NULL CHECK (amount > 0),
  payment_type  TEXT           NOT NULL CHECK (payment_type IN ('advance', 'additional')),
  notes         TEXT,
  created_at    TIMESTAMPTZ    NOT NULL DEFAULT NOW(),
  created_by    UUID           REFERENCES auth.users(id),
  CONSTRAINT advance_cap CHECK (payment_type != 'advance' OR amount <= 20000)
);

ALTER TABLE ip_payments ENABLE ROW LEVEL SECURITY;

-- ----------------------------------------------------------------
-- ip_audit_log
-- Written only by triggers (SECURITY DEFINER). Never writable from frontend.
-- ----------------------------------------------------------------
CREATE TABLE ip_audit_log (
  id             UUID        PRIMARY KEY DEFAULT gen_random_uuid(),
  table_name     TEXT        NOT NULL,
  record_id      UUID        NOT NULL,
  action         TEXT        NOT NULL CHECK (action IN ('INSERT', 'UPDATE')),
  user_id        UUID        REFERENCES auth.users(id),
  user_role      ip_role,
  changed_fields JSONB,
  created_at     TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

ALTER TABLE ip_audit_log ENABLE ROW LEVEL SECURITY;

-- ================================================================
-- Helper: resolve calling user's IP role (SECURITY DEFINER bypasses
-- ip_user_roles RLS to prevent infinite-recursion in policies).
-- ================================================================
CREATE OR REPLACE FUNCTION ip_get_role(uid uuid)
RETURNS ip_role
LANGUAGE sql SECURITY DEFINER STABLE
SET search_path = public
AS $$
  SELECT role FROM ip_user_roles WHERE user_id = uid;
$$;

-- ================================================================
-- RLS Policies
-- ================================================================

-- ip_user_roles ---------------------------------------------------
CREATE POLICY "ip_roles_super_select" ON ip_user_roles
  FOR SELECT USING (ip_get_role(auth.uid()) = 'super_admin');

CREATE POLICY "ip_roles_super_insert" ON ip_user_roles
  FOR INSERT WITH CHECK (ip_get_role(auth.uid()) = 'super_admin');

CREATE POLICY "ip_roles_super_update" ON ip_user_roles
  FOR UPDATE USING (ip_get_role(auth.uid()) = 'super_admin');

CREATE POLICY "ip_roles_super_delete" ON ip_user_roles
  FOR DELETE USING (ip_get_role(auth.uid()) = 'super_admin');

-- Every IP user can read their own role row (needed for auth check on login).
CREATE POLICY "ip_roles_own_select" ON ip_user_roles
  FOR SELECT USING (user_id = auth.uid());

-- ip_patients -----------------------------------------------------
CREATE POLICY "ip_patients_select" ON ip_patients
  FOR SELECT USING (ip_get_role(auth.uid()) IS NOT NULL);

CREATE POLICY "ip_patients_insert" ON ip_patients
  FOR INSERT WITH CHECK (ip_get_role(auth.uid()) IN ('admin', 'finance'));

CREATE POLICY "ip_patients_update" ON ip_patients
  FOR UPDATE USING (ip_get_role(auth.uid()) IN ('admin', 'finance'));

-- ip_charges ------------------------------------------------------
CREATE POLICY "ip_charges_select" ON ip_charges
  FOR SELECT USING (ip_get_role(auth.uid()) IS NOT NULL);

CREATE POLICY "ip_charges_insert" ON ip_charges
  FOR INSERT WITH CHECK (ip_get_role(auth.uid()) IN ('admin', 'medical', 'finance'));

CREATE POLICY "ip_charges_update" ON ip_charges
  FOR UPDATE USING (ip_get_role(auth.uid()) IN ('admin', 'finance'));

CREATE POLICY "ip_charges_delete" ON ip_charges
  FOR DELETE USING (ip_get_role(auth.uid()) IN ('admin', 'finance'));

-- ip_payments -----------------------------------------------------
CREATE POLICY "ip_payments_select" ON ip_payments
  FOR SELECT USING (ip_get_role(auth.uid()) IS NOT NULL);

CREATE POLICY "ip_payments_insert" ON ip_payments
  FOR INSERT WITH CHECK (ip_get_role(auth.uid()) IN ('admin', 'finance'));

-- ip_audit_log ----------------------------------------------------
CREATE POLICY "ip_audit_super_select" ON ip_audit_log
  FOR SELECT USING (ip_get_role(auth.uid()) = 'super_admin');

-- ================================================================
-- Audit Trigger Function
-- ================================================================
CREATE OR REPLACE FUNCTION ip_audit_fn()
RETURNS TRIGGER
LANGUAGE plpgsql SECURITY DEFINER
SET search_path = public
AS $$
DECLARE
  v_user_id  UUID;
  v_role     ip_role;
  v_changes  JSONB := '{}';
  v_old      JSONB;
  v_new      JSONB;
  v_key      TEXT;
BEGIN
  v_user_id := NULLIF(current_setting('request.jwt.claims', true)::jsonb->>'sub', '')::UUID;
  SELECT role INTO v_role FROM ip_user_roles WHERE user_id = v_user_id;

  IF TG_OP = 'INSERT' THEN
    INSERT INTO ip_audit_log (table_name, record_id, action, user_id, user_role, changed_fields)
    VALUES (TG_TABLE_NAME, NEW.id, 'INSERT', v_user_id, v_role, to_jsonb(NEW));

  ELSIF TG_OP = 'UPDATE' THEN
    v_old := to_jsonb(OLD);
    v_new := to_jsonb(NEW);
    FOR v_key IN SELECT jsonb_object_keys(v_new) LOOP
      IF v_old->v_key IS DISTINCT FROM v_new->v_key THEN
        v_changes := v_changes || jsonb_build_object(
          v_key,
          jsonb_build_object('old', v_old->v_key, 'new', v_new->v_key)
        );
      END IF;
    END LOOP;
    INSERT INTO ip_audit_log (table_name, record_id, action, user_id, user_role, changed_fields)
    VALUES (TG_TABLE_NAME, NEW.id, 'UPDATE', v_user_id, v_role, v_changes);
  END IF;

  RETURN NEW;
END;
$$;

CREATE TRIGGER ip_patients_audit
  AFTER INSERT OR UPDATE ON ip_patients
  FOR EACH ROW EXECUTE FUNCTION ip_audit_fn();

CREATE TRIGGER ip_charges_audit
  AFTER INSERT OR UPDATE ON ip_charges
  FOR EACH ROW EXECUTE FUNCTION ip_audit_fn();

CREATE TRIGGER ip_payments_audit
  AFTER INSERT OR UPDATE ON ip_payments
  FOR EACH ROW EXECUTE FUNCTION ip_audit_fn();
