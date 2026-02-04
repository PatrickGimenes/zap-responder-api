import express from "express";
import router from "./routes";
import { initDb } from "./database";
import { checkchats } from "./utils/agenda";

async function bootstrap() {
  await initDb();

  const app = express();
  app.use(express.json());
  app.use(router);
  checkchats()

  app.listen(3000, () => {
    console.log("Servidor rodando em http://localhost:3000");
  });
}

bootstrap();
