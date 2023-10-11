import postgres from "postgres";
import { environment } from "./environment.js";


const {DATABASE_URL} = environment;

export const sql = postgres(DATABASE_URL);


/**const { Pool } = require("pg");
const pool = new Pool({
  user: "postgres",
  host: "localhost",
  database: "HanapBuhay",
  password: "wasdqe123",
  port: 5432,
});
module.exports = pool;**/