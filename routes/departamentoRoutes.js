import express from "express";
import { body } from "express-validator";
import * as departamentoController from "../controllers/departamentoController.js";
import { validarDepartamento } from "../middlewares/validarDepartamento.js";

const router = express.Router();

// Validaciones para crear un departamento
router.post(
  "/departamento",
  [
    body("nombre")
      .notEmpty()
      .withMessage("El nombre del departamento es obligatorio"),
  ],
  validarDepartamento, 
  departamentoController.crearDepartamento
);

router.get("/", departamentoController.obtenerDepartamentos);

export default router;
