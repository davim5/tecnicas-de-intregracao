import { Router } from "express";
const router = Router();

let walkers = [
  { id: 1, name: "Ana", price: 30, rating: 4.8 },
  { id: 2, name: "Carlos", price: 25, rating: 4.5 },
];

router.get("/", (req, res) => res.json(walkers));

export default router;
