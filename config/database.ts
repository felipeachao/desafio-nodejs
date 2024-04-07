import { Sequelize } from "sequelize";
import { env } from "./env.validator";

export const sequelize = new Sequelize(
  env.POSTGRES_DATABASE,
  env.POSTGRES_USER,
  env.POSTGRES_PASSWORD,
  {
    dialect: "postgres",
    host: env.POSTGRES_HOST,
    port: env.POSTGRES_PORT,
  }
);
