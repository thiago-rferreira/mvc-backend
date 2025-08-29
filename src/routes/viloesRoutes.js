import express from "express";
import { getAllViloes, createVilao } from "../controllers/viloesController.js";

const router = express.Router();

// Rotas para vilões
router.get("/", getAllViloes);
router.post("/", createVilao);

export default router;