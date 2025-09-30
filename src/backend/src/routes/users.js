import { Router } from "express";
const router = Router();

let users = []; // Simulação em memória

// Registro
router.post("/register", (req, res) => {
  const { name, email, role } = req.body;
  if (!name || !email || !role) {
    return res.status(400).json({ error: "Dados incompletos" });
  }
  const user = { id: users.length + 1, name, email, role };
  users.push(user);
  res.status(201).json(user);
});

// Login fake
router.post("/login", (req, res) => {
  const { email } = req.body;
  const user = users.find((u) => u.email === email);
  if (!user) return res.status(401).json({ error: "Usuário não encontrado" });
  res.json({ message: "Login bem-sucedido", user });
});

export default router;
