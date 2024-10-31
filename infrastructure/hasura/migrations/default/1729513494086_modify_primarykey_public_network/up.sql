BEGIN TRANSACTION;
ALTER TABLE "public"."network" DROP CONSTRAINT "network_pkey";

ALTER TABLE "public"."network"
    ADD CONSTRAINT "network_pkey" PRIMARY KEY ("id", "user_id_1", "user_id_2");
COMMIT TRANSACTION;
