// src/routes/bmi.routes.ts
import { Router } from "express";
import { BmiController } from "../controllers/bmi.controller";
import { authenticate } from "../middleware/auth.middleware"; // optional, if you want JWT protection

const router = Router();

// POST /api/bmi
router.post("/", authenticate, BmiController.calculate); // protected route
// If you want it public (no login required):
// router.post("/", BmiController.calculate);

export default router;