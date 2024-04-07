import { config } from 'dotenv';   

config();

const requiredVariables = ['POSTGRES_HOST', 'POSTGRES_PORT', 'POSTGRES_DATABASE', 'POSTGRES_USER', 'POSTGRES_PASSWORD', 'API_PORT'];

for (const variable of requiredVariables) {
  if (!process.env[variable]) {
    throw new Error(`Environment variable ${variable} is missing`);
  }
}

export const env = {
  POSTGRES_HOST: process.env.POSTGRES_HOST as string,
  POSTGRES_PORT: parseInt(process.env.POSTGRES_PORT as string),
  POSTGRES_DATABASE: process.env.POSTGRES_DATABASE as string,
  POSTGRES_USER: process.env.POSTGRES_USER as string,
  POSTGRES_PASSWORD: process.env.POSTGRES_PASSWORD as string,
  API_PORT: process.env.API_PORT as string,
};
