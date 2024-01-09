import "dotenv/config";
import express from "express";
import cors from "cors";
import clientesRouter from "./routes/clientes.js";
import pc from "picocolors";

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());
app.use("/api", clientesRouter);

let servidor = `Server is running on http://localhost:${PORT}/api`;

app.listen(PORT, () => {
  console.log(pc.bgYellow(pc.black(servidor)));
})