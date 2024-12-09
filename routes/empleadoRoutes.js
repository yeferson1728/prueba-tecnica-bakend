 import express from "express";
import { body } from "express-validator";
import * as empleadoController from "../controllers/empleadoController.js";
import { validarEmpleado } from "../middlewares/validarEmpleado.js";

const router = express.Router();

// Validaciones para crear un empleado
router.post(
  "/addEmpleado",
  [
    body("nombre").notEmpty().withMessage("El nombre es obligatorio"),
    body("apellido").notEmpty().withMessage("El apellido es obligatorio"),
    body("apellido2").notEmpty().withMessage("El segundo apellido es obligatorio"),
    body("codigo").notEmpty().withMessage("El codigo es obligatorio"),
    // body("edad")
    //   .isInt({ min: 18 })
    //   .withMessage("La edad debe ser mayor o igual a 18"),
    // body("puesto").notEmpty().withMessage("El puesto es obligatorio"),
    body("departamentoId")
      .isMongoId()
      .withMessage("El ID del departamento es inválido"),
  ],
  validarEmpleado,
  empleadoController.crearEmpleado
);

router.get("/", empleadoController.obtenerEmpleados);
router.get("/:id", empleadoController.obtenerEmpleado);
router.put("/:id", empleadoController.actualizarEmpleado);
router.delete("/:id", empleadoController.eliminarEmpleado);

export default router;
