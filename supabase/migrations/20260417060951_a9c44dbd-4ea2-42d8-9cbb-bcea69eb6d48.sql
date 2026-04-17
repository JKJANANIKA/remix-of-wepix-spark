create table public.leads (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  email text not null,
  phone text,
  details text not null,
  source text default 'contact_form',
  created_at timestamptz not null default now()
);

alter table public.leads enable row level security;

create policy "Anyone can submit a lead"
  on public.leads
  for insert
  to anon, authenticated
  with check (
    char_length(name) between 1 and 120
    and char_length(email) between 3 and 255
    and email ~* '^[^@\s]+@[^@\s]+\.[^@\s]+$'
    and char_length(details) between 1 and 4000
    and (phone is null or char_length(phone) <= 40)
  );