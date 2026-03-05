// import pkg from "pg"; 
import { Pool } from "pg";
import dotenv  from "dotenv";
//import path from "path";

// const { Pool } = pkg;

// Load .env from project root
 dotenv.config();

export const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: process.env.NODE_ENV === "production" ?
  {  rejectUnauthorized: false }
  : false,
});

console.log("DATABASE_URL:", process.env.DATABASE_URL);

console.log("NODE_ENV:", process.env.NODE_ENV);