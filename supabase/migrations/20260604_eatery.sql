-- eatery_dishes
create table if not exists eatery_dishes (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  price integer not null,
  is_available boolean not null default true,
  prep_time_mins integer not null default 10,
  display_order integer not null default 0,
  created_at timestamptz default now()
);

-- eatery_tables
create table if not exists eatery_tables (
  id uuid primary key default gen_random_uuid(),
  table_number integer not null unique,
  qr_token text not null unique default gen_random_uuid()::text,
  created_at timestamptz default now()
);

-- eatery_orders
create table if not exists eatery_orders (
  id uuid primary key default gen_random_uuid(),
  table_id uuid references eatery_tables(id),
  table_number integer not null,
  items jsonb not null,
  total integer not null,
  special_instructions text,
  status text not null default 'pending',
  estimated_mins integer,
  created_at timestamptz default now()
);

-- RLS
alter table eatery_dishes enable row level security;
alter table eatery_tables enable row level security;
alter table eatery_orders enable row level security;

create policy "dishes_read_all"   on eatery_dishes for select using (true);
create policy "dishes_auth_write" on eatery_dishes for all    using (auth.role() = 'authenticated');

create policy "tables_read_all"   on eatery_tables for select using (true);
create policy "tables_auth_write" on eatery_tables for all    using (auth.role() = 'authenticated');

create policy "orders_anon_insert"  on eatery_orders for insert with check (true);
create policy "orders_read_all"     on eatery_orders for select using (true);
create policy "orders_auth_write"   on eatery_orders for update using (auth.role() = 'authenticated');
create policy "orders_auth_delete"  on eatery_orders for delete using (auth.role() = 'authenticated');

-- seed the 5 standard dishes
insert into eatery_dishes (name, price, is_available, prep_time_mins, display_order) values
  ('Idly',   20, true,  5, 1),
  ('Dosa',   40, true,  8, 2),
  ('Puri',   35, true,  7, 3),
  ('Vada',   25, true,  6, 4),
  ('Pongal', 30, true,  8, 5)
on conflict do nothing;
