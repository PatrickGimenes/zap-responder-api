import express from "express";
import router from "./router/routes";
import router_empresa from "./router/routes_mysql";
import { initDb } from "./database";
import { checkchats } from "./utils/agenda";

async function bootstrap() {
  await initDb();

  const app = express();
  app.use(express.json());
  app.use(router);
  app.use(router_empresa);
  checkchats();

  app.listen(3000, () => {
    console.log("Servidor rodando em http://localhost:3000");
  });
}

bootstrap();
