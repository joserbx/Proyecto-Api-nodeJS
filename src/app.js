import "dotenv/config";
import express from "express";
import cors from "cors";
import clientesRouter from "./routes/clientes.js";

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());
app.use("/api", clientesRouter);

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}/api`);
});
