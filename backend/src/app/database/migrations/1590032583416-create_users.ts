import { Schema } from "../../../../deps.ts";

export const up = (schema: Schema): void => {
  schema.create("users", (table) => {
    table.uuid("id").primary();
    table.string("name", 255).notNullable();
    table.string("email", 255).unique();
    table.string("password", 255);
    table.string("avatar", 255);
    table.string("token", 255);
    table.dateTime("token_created_at");
    table.text("google_token");
    table.text("facebook_token");
    table.string("provider_id", 255);
    table.string("study_choice", 255);
    table.timestamps();
  });
};

export const down = (schema: Schema): void => {
  schema.drop("users");
};
