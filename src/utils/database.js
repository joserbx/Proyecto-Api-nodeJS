import "dotenv/config";
import { createPool } from "mysql2/promise"; // Cambiado para usar el paquete promise

const pool = createPool({
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
});

console.log(`Connected to database ${process.env.DB_NAME}`);

export default pool;
