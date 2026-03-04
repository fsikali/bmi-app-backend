// src/controllers/quotes.controller.ts
import { Request, Response } from "express";
import { QuotesService } from "../services/quotes.service";

const quotesService = new QuotesService();

export class QuotesController {
  static async getQuotes(req: Request, res: Response) {
    const quotes = await quotesService.getAll();
    res.json(quotes);
  }
}
