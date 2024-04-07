import { env } from "../config/env.validator";
import express from "express";
import { sequelize } from "../config/database";
import router from "./routes/routes";

const app = express();
const PORT = env.API_PORT;

app.use(express.json());

app.use(router);

sequelize.sync().then(() => {
  app.listen(PORT, async () => {
    console.log(`Server is running on port ${PORT}`);
  });
});
