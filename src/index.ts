import "reflect-metadata";
import * as express from "express";
import * as bodyParser from "body-parser";
import routes from "./model/routes";

import * as dotenv from "dotenv";

dotenv.config();

const app = express()

app.use(bodyParser.json())

app.use(routes)

app.listen(process.env.PORT, () => {
    console.log(`Servidor rodando em: http://localhost:${process.env.PORT}`);
  });