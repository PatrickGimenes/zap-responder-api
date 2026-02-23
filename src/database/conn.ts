import mysql from "mysql2/promise";

function required(value: string | undefined, name: string): string {
  if (!value) {
    throw new Error(`Variável de ambiente ${name} não definida`);
  }
  return value;
}

export const pool = mysql.createPool({
  host: required(process.env.DB_HOST, "DB_HOST"),
  user: required(process.env.DB_USER, "DB_USER"),
  password: required(process.env.DB_PASSWORD, "DB_PASSWORD"),
  database: required(process.env.DB_NAME, "DB_NAME"),
  port: Number(process.env.DB_PORT || 3306),
  waitForConnections: true,
  connectionLimit: 10,
});
