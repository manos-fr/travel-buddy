CREATE TABLE "public"."users_places" ("id" serial NOT NULL, "user_id" integer NOT NULL, "place_id" integer NOT NULL, "created_at" timestamptz NOT NULL DEFAULT now(), "updated_at" timestamptz NOT NULL DEFAULT now(), PRIMARY KEY ("id","user_id","place_id") , FOREIGN KEY ("place_id") REFERENCES "public"."places"("id") ON UPDATE restrict ON DELETE restrict, FOREIGN KEY ("user_id") REFERENCES "public"."users"("id") ON UPDATE restrict ON DELETE restrict);
CREATE OR REPLACE FUNCTION "public"."set_current_timestamp_updated_at"()
RETURNS TRIGGER AS $$
DECLARE
  _new record;
BEGIN
  _new := NEW;
  _new."updated_at" = NOW();
  RETURN _new;
END;
$$ LANGUAGE plpgsql;
CREATE TRIGGER "set_public_users_places_updated_at"
BEFORE UPDATE ON "public"."users_places"
FOR EACH ROW
EXECUTE PROCEDURE "public"."set_current_timestamp_updated_at"();
COMMENT ON TRIGGER "set_public_users_places_updated_at" ON "public"."users_places"
IS 'trigger to set value of column "updated_at" to current timestamp on row update';
