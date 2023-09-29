import postgres from "postgres";
import dotenv from "dotenv";

dotenv.config();

export const sql = postgres(process.env.DATABASE_URL);


/**const { Pool } = require("pg");
const pool = new Pool({
  user: "postgres",
  host: "localhost",
  database: "HanapBuhay",
  password: "wasdqe123",
  port: 5432,
});
module.exports = pool;**/