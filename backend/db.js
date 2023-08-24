const { Pool } = require("pg");
const pool = new Pool({
  user: "postgres",
  host: "localhost",
  database: "HanapBuhay",
  password: "wasdqe123",
  port: 5432,
});
