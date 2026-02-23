import { Router } from "express";
import { pool } from "../database/conn";

const router_empresa = Router();

router_empresa.post("/empresa", async (req, res) => {
  const empresa = String(req.body.empresa || "").trim();
  try {
    const [rows] = await pool.query(
      "SELECT * FROM anfe_clientes WHERE raz_social LIKE ?",
      [`%${empresa}%`],
    );
    res.json(rows);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Erro ao buscar empresa" });
  }
});

export default router_empresa;
