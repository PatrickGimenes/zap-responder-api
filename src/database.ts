import sqlite3 from "sqlite3";
import { open, Database } from "sqlite";

let db: Database;

export async function initDb() {
  db = await open({
    filename: "./database.db",
    driver: sqlite3.Database,
  });

  await db.exec(`
    CREATE TABLE IF NOT EXISTS tb_chat (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      chatid TEXT NOT NULL,
      created_at INTEGER NOT NULL,
      active INTEGER NOT NULL DEFAULT 1 
    )
  `);

  return db;
}

export function getDb() {
  if (!db) {
    throw new Error("Banco não inicializado");
  }
  return db;
}
