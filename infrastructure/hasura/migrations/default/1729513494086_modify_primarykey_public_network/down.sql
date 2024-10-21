alter table "public"."network" drop constraint "network_pkey";
alter table "public"."network"
    add constraint "network_pkey"
    primary key ("id");
