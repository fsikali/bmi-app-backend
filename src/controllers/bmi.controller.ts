// src/controllers/bmi.controller.ts
import { Request, Response } from "express";
import { BmiService } from "../services/bmi.service";

const bmiService = new BmiService();

export class BmiController {
  static calculate(req: Request, res: Response) {
    const { weight, height } = req.body;
    if (!weight || !height) return res.status(400).json({ error: "Missing values" });

    const bmi = bmiService.calculate(weight, height);
    res.json({ bmi });
  }
}