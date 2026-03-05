// src/server.ts
import dotenv from "dotenv";
import cors from "cors";
// import path from "path";

// Load .env from project root
// dotenv.config({ path: path.resolve(__dirname, "../.env") });
dotenv.config();

import app from "./app";

app.use(cors({
  origin: "*",
  methods: ["GET", "POST", "PUT", "DELETE"]
}));

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

// Debug check
console.log("DB_USER:", process.env.DB_USER);
console.log("DB_PASSWORD:", process.env.DB_PASSWORD);
console.log("JWT_SECRET:", process.env.JWT_SECRET);
