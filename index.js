import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import connectDB from "./config/db.js";
import empleadoRoutes from "./routes/empleadoRoutes.js";
import departamentoRoutes from "./routes/departamentoRoutes.js";

// Cargar las variables de entorno
dotenv.config();

const app = express();

// Middleware
app.use(cors());

// Conexión a la base de datos
connectDB();

// Middleware
app.use(express.json());

// Rutas
app.use("/api/empleados", empleadoRoutes);
app.use("/api/departamentos", departamentoRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en el puerto ${PORT}`);
});
