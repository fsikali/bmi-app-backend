import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { pool } from "../db";

export class AuthService {

  async signup(email: string, password: string): Promise<string> {

    const existing = await pool.query(
      "SELECT * FROM users WHERE email = $1",
      [email]
    );

    if (existing.rows.length > 0) {
      throw new Error("User already exists");
    }

    const hashed = await bcrypt.hash(password, 10);

    const result = await pool.query(
      "INSERT INTO users (email, password) VALUES ($1, $2) RETURNING id, email",
      [email, hashed]
    );

    const user = result.rows[0];

    return jwt.sign(
      { id: user.id, email: user.email },
      process.env.JWT_SECRET!,
      { expiresIn: "1h" }
    );
  }

  async login(email: string, password: string): Promise<string> {

    const result = await pool.query(
      "SELECT * FROM users WHERE email = $1",
      [email]
    );

    if (result.rows.length === 0) {
      throw new Error("Invalid credentials");
    }

    const user = result.rows[0];

    const valid = await bcrypt.compare(password, user.password);
    if (!valid) {
      throw new Error("Invalid credentials");
    }

    return jwt.sign(
      { id: user.id, email: user.email },
      process.env.JWT_SECRET!,
      { expiresIn: "1h" }
    );
  }
}
