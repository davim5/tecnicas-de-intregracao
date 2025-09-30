import { Router } from "express";
import paymentService from "../services/paymentService.js";

const router = Router();
let walks = [];

// Agendar passeio
router.post("/schedule", async (req, res) => {
  try {
    const { userId, walkerId, value } = req.body;
    if (!userId || !walkerId || !value) {
      return res.status(400).json({ error: "Dados incompletos" });
    }

    // Simula cobrança
    const payment = await paymentService.charge(value);

    const walk = { id: walks.length + 1, userId, walkerId, value, payment };
    walks.push(walk);

    res.status(201).json(walk);
  } catch (err) {
    res.status(500).json({ error: "Erro ao agendar passeio" });
  }
});

export default router;
