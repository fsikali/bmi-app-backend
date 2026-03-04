// import pkg from "pg"; 
import { Pool } from "pg";
import dotenv  from "dotenv";
import path from "path";

// const { Pool } = pkg;

// Load .env from project root
dotenv.config({ path: path.resolve(__dirname, "../.env") });

export const pool = new Pool({
    user: process.env.DB_USER, 
    password: process.env.DB_PASSWORD, 
    host: process.env.DB_HOST, 
    port: Number(process.env.DB_PORT), 
    database: process.env.DB_NAME,
}); 

console.log("DB_USER:", process.env.DB_USER);
console.log("DB_PASSWORD:", process.env.DB_PASSWORD);
console.log("ENV CHECK:", process.env.DB_USER);

