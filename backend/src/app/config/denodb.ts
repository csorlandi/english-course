import { Database } from "../../../deps.ts";
import User from "../models/User.ts";

const db = new Database("postgres", {
  host: "localhost",
  username: "postgres",
  password: "docker",
  database: "english_course",
  port: 5432,
});

//Linkando os models!
db.link([User]);

export default db;
