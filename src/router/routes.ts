import { Router } from "express";
import { getDb } from "../database";

const router = Router();

router.get("/chats", async (_, res) => {
  const db = getDb();
  const users = await db.all("SELECT * FROM tb_chat");
  res.send(users);
});

router.post("/chats", async (req, res) => {
  const { chatId } = req.body;

   const createdAt = Date.now(); // timestamp em ms

  if (!chatId) {
    return res.status(400).json({ message: "Id do chat é obrigatório" });
  }

  try {
    const db = getDb();
    await db.run("INSERT INTO tb_chat (chatid, created_at) VALUES (?, ?)", [
      chatId,
      createdAt,
    ]);

    res.status(201).json({ message: "Chat adicionado com sucesso" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Erro ao adcionar o chat" });
  }
});

export default router;
