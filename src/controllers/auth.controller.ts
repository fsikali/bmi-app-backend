// src/controllers/auth.controller.ts
import { Request, Response } from "express";
import { AuthService } from "../services/auth.service";

const authService = new AuthService();

export class AuthController {
  static async signup(req: Request, res: Response) {
    try {
      const { email, password } = req.body;
      const token = await authService.signup(email, password);
      res.json({ token });
    } catch (err: any) {
      res.status(400).json({ error: err.message });
    }
  }

  static async login(req: Request, res: Response) {
    try {
      const { email, password } = req.body;
      const token = await authService.login(email, password);
      res.json({ token });
    } catch (err: any) {
      res.status(400).json({ error: err.message });
    }
  }
}
