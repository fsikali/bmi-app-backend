// src/routes/quotes.routes.ts
import { Router } from "express";
import { QuotesController } from "../controllers/quotes.controller";
import { authenticate } from "../middleware/auth.middleware";

const router = Router();

router.get("/", authenticate, QuotesController.getQuotes);

export default router;
