import express from "express";
import cors from "cors";
import authRoutes from "./routes/auth.routes";
import bmiRoutes from "./routes/bmi.routes";
import quotesRoutes from "./routes/quotes.routes";

const app = express();

app.use(express.json());

app.use(cors({
  origin: ["http://localhost:3000",
    "https://bmi-app-frontend.vercel.app"
  ], // allow Next.js frontend
  credentials: true
}));

app.get("/", (req, res) => {
  res.send("BMI API is running. Use /api/auth, /api/bmi, /api/quotes");
});


app.use("/api/auth", authRoutes);
app.use("/api/bmi", bmiRoutes);
app.use("/api/quotes", quotesRoutes);

export default app;
