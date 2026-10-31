-- ================================================================
-- Medical Rep Appointments System
-- Run this entire file in your Supabase SQL editor
-- ================================================================

create table if not exists medrep_appointments (
  id               uuid        primary key default gen_random_uuid(),
  serial_no        integer     not null,
  rep_name         text        not null,
  company_name     text        not null,
  mobile_no        text        not null,
  appointment_date date        not null,
  appointment_time text        not null default '13.01',
  booked_at        timestamptz default now(),
  constraint uq_medrep_date_mobile unique (appointment_date, mobile_no)
);

create index if not exists idx_medrep_appt_date on medrep_appointments(appointment_date);

-- ----------------------------------------------------------------
-- Row-Level Security
-- ----------------------------------------------------------------
alter table medrep_appointments enable row level security;

-- Authenticated admins can read all rows
create policy "medrep admin select"
  on medrep_appointments for select
  to authenticated using (true);

-- Authenticated admins can delete any row
create policy "medrep admin delete"
  on medrep_appointments for delete
  to authenticated using (true);

-- No anon select or direct insert — public must use the RPC

-- ----------------------------------------------------------------
-- get_available_slots
-- Returns remaining slots for a date (max 20).
-- Safe to expose publicly — reveals only a count, no personal data.
-- ----------------------------------------------------------------
create or replace function get_available_slots(target_date date)
returns integer
language sql
stable
security definer
as $$
  select greatest(0, 20 - count(*)::integer)
  from medrep_appointments
  where appointment_date = target_date;
$$;

grant execute on function get_available_slots(date) to anon, authenticated;

-- ----------------------------------------------------------------
-- book_appointment
-- Race-condition safe: uses an advisory transaction lock so two
-- simultaneous requests for the same date serialise through the
-- count check rather than both seeing < 20 and both inserting.
-- Returns JSON with status: 'success' | 'slot_full' | 'duplicate'
-- ----------------------------------------------------------------
create or replace function book_appointment(
  p_rep_name        text,
  p_company_name    text,
  p_mobile_no       text,
  p_appointment_date date
)
returns json
language plpgsql
security definer
as $$
declare
  v_count     integer;
  v_serial_no integer;
begin
  -- Serialise concurrent bookings for the same date
  perform pg_advisory_xact_lock(hashtext(p_appointment_date::text));

  select count(*) into v_count
  from medrep_appointments
  where appointment_date = p_appointment_date;

  if v_count >= 20 then
    return json_build_object('status', 'slot_full');
  end if;

  if exists (
    select 1 from medrep_appointments
    where appointment_date = p_appointment_date
      and mobile_no = p_mobile_no
  ) then
    return json_build_object('status', 'duplicate');
  end if;

  v_serial_no := v_count + 1;

  insert into medrep_appointments
    (serial_no, rep_name, company_name, mobile_no, appointment_date)
  values
    (v_serial_no, p_rep_name, p_company_name, p_mobile_no, p_appointment_date);

  return json_build_object(
    'status',           'success',
    'serial_no',        v_serial_no,
    'rep_name',         p_rep_name,
    'company_name',     p_company_name,
    'mobile_no',        p_mobile_no,
    'appointment_date', p_appointment_date::text
  );
exception
  when unique_violation then
    return json_build_object('status', 'duplicate');
end;
$$;

grant execute on function book_appointment(text, text, text, date) to anon, authenticated;

-- ================================================================
-- Admin user setup (run once, replace password)
--
-- Option A — Dashboard UI:
--   Supabase Dashboard → Authentication → Users → Add User
--   Email: admin@gkfmadurai.in   Password: <strong-password>
--   Toggle "Auto Confirm User" ON
--
-- Option B — SQL (replace 'REPLACE_ME' with a real password):
--
-- insert into auth.users (
--   instance_id, id, aud, role, email, encrypted_password,
--   email_confirmed_at, raw_app_meta_data, raw_user_meta_data,
--   created_at, updated_at
-- ) values (
--   '00000000-0000-0000-0000-000000000000',
--   gen_random_uuid(),
--   'authenticated', 'authenticated',
--   'admin@gkfmadurai.in',
--   crypt('REPLACE_ME', gen_salt('bf')),
--   now(),
--   '{"provider":"email","providers":["email"]}',
--   '{}', now(), now()
-- );
-- ================================================================
