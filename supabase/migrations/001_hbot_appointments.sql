-- ===================================================================
-- HBOT (Hyperbaric Oxygen Therapy) Appointments
-- Run this entire script once in the Supabase SQL Editor.
-- ===================================================================

-- Enums
create type public.hbot_booking_for as enum ('self', 'family_member', 'other');
create type public.hbot_appointment_status as enum ('pending', 'confirmed', 'rejected', 'cancelled');

-- Main table
create table public.hbot_appointments (
  id              uuid        primary key default gen_random_uuid(),
  full_name       text        not null,
  email           text        not null,
  phone           text        not null,
  booking_for     public.hbot_booking_for not null default 'self',
  patient_name    text,                                  -- required when booking_for != 'self'
  reason          text        not null,
  doctor_referral text,                                  -- optional
  preferred_date  date        not null,
  preferred_time  text        not null,
  status          public.hbot_appointment_status not null default 'pending',
  admin_note      text,                                  -- rejection reason / internal note
  created_at      timestamptz not null default now(),
  reviewed_at     timestamptz                            -- stamped when staff approve/reject
);

-- Indexes
create index idx_hbot_appointments_status         on public.hbot_appointments (status);
create index idx_hbot_appointments_preferred_date on public.hbot_appointments (preferred_date);

-- ===================================================================
-- Row Level Security
-- ===================================================================
alter table public.hbot_appointments enable row level security;

-- INSERT: anon + authenticated may submit, but ONLY as 'pending'.
-- Calling the API directly cannot create a pre-approved row.
create policy "hbot_public_insert_pending_only"
  on public.hbot_appointments
  for insert
  to anon, authenticated
  with check (status = 'pending');

-- SELECT / UPDATE: any authenticated user counts as staff for now.
-- Replace with the allow-list variant below before going live.
create policy "hbot_staff_select"
  on public.hbot_appointments
  for select
  to authenticated
  using (true);

create policy "hbot_staff_update"
  on public.hbot_appointments
  for update
  to authenticated
  using (true);

-- ===================================================================
-- PRODUCTION LOCK-DOWN — uncomment before launch
-- ===================================================================
-- The simple policies above treat ANY logged-in Supabase user as staff.
-- Lock this down by creating an allow-list table and replacing the
-- policies with the staff-scoped variants shown below.
--
-- Step 1: create the allow-list
-- create table public.hbot_staff (
--   user_id uuid primary key references auth.users (id) on delete cascade
-- );
--
-- Step 2: add each staff member's user_id
-- insert into public.hbot_staff (user_id) values ('<uuid>');
--
-- Step 3: replace the open policies
-- drop policy "hbot_staff_select" on public.hbot_appointments;
-- drop policy "hbot_staff_update" on public.hbot_appointments;
--
-- create policy "hbot_staff_select_allowlist"
--   on public.hbot_appointments
--   for select
--   to authenticated
--   using (
--     exists (select 1 from public.hbot_staff s where s.user_id = auth.uid())
--   );
--
-- create policy "hbot_staff_update_allowlist"
--   on public.hbot_appointments
--   for update
--   to authenticated
--   using (
--     exists (select 1 from public.hbot_staff s where s.user_id = auth.uid())
--   );
-- ===================================================================
