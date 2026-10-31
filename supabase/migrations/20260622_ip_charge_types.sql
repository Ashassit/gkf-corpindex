-- Managed list of charge type names for the IP Bill Book dropdown
CREATE TABLE IF NOT EXISTS ip_charge_types (
  id          UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name        TEXT NOT NULL,
  created_by  UUID REFERENCES auth.users(id) ON DELETE SET NULL,
  created_at  TIMESTAMPTZ NOT NULL DEFAULT now()
);

ALTER TABLE ip_charge_types ENABLE ROW LEVEL SECURITY;

-- Any authenticated IP user can read the list
CREATE POLICY "ip_charge_types_read" ON ip_charge_types
  FOR SELECT
  USING (ip_get_role(auth.uid()) IS NOT NULL);

-- Only admin / super_admin can add
CREATE POLICY "ip_charge_types_insert" ON ip_charge_types
  FOR INSERT
  WITH CHECK (ip_get_role(auth.uid()) IN ('admin', 'super_admin'));

-- Only admin / super_admin can delete
CREATE POLICY "ip_charge_types_delete" ON ip_charge_types
  FOR DELETE
  USING (ip_get_role(auth.uid()) IN ('admin', 'super_admin'));

-- Seed default charge types
INSERT INTO ip_charge_types (name) VALUES
  ('Consultation'),
  ('Lab'),
  ('Eatery'),
  ('Pharmacy'),
  ('Radiology'),
  ('Procedure'),
  ('Room Charges'),
  ('Nursing');
