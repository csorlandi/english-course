import { DATA_TYPES, Model } from "../../../deps.ts";

class User extends Model {
  static table = "users";
  static timestamps = true;

  static fields = {
    id: {
      primaryKey: true,
      autoIncrement: false,
    },
    name: DATA_TYPES.STRING,
    email: DATA_TYPES.STRING,
    password: DATA_TYPES.STRING,
    avatar: DATA_TYPES.STRING,
    token: DATA_TYPES.STRING,
    token_created_at: DATA_TYPES.DATETIME,
    google_token: DATA_TYPES.TEXT,
    facebook_token: DATA_TYPES.TEXT,
    provider_id: DATA_TYPES.STRING,
    study_choice: DATA_TYPES.STRING,
  };
}

export default User;
