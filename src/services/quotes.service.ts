// src/services/quotes.service.ts
import { Quote } from "../models/quote.model";

const quotes: Quote[] = [
  { id: 1, text: "Simple BMI, and Quotes api", author: "Flemming Sikali" },
];

export class QuotesService {
  async getAll(): Promise<Quote[]> {
    return quotes;
  }
}