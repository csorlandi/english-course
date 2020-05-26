const configPg = {
  migrationFolder: `./src/app/database/migrations`,
  connection: {
    database: "english_course",
    hostname: "localhost",
    port: 5432,
    user: "postgres",
    password: "docker",
  },
  dialect: "pg",
};

export default configPg;
