alter table "public"."places" alter column "category" drop not null;
alter table "public"."places" add column "category" text;
