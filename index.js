import "dotenv/config";
import express from "express";
import empleado from "path";
import cors from "cors";
import routes from "./routes";

const app = express();
app.use(express.json());
app.use(cors());
app.use("/", api);
connectDB();
// rutas

//servidor
app.listen(process.env.APP_PORT, () => {
  console.log(`[Server] Server running at ${process.env.APP_PORT} port`);
});

 export default app;