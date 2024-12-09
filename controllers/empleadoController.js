import bcrypt from "bcryptjs";
import * as empleadoService from "../services/empleadoService.js";

export const crearEmpleado = async (req, res) => {
  try {
    // const salt = await bcrypt.genSalt(10);
    // const hashedPassword = await bcrypt.hash(req.body.password, salt);
    // req.body.password = hashedPassword;

    const empleado = await empleadoService.crearEmpleado(req.body);
    res.status(201).json(empleado);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const obtenerEmpleados = async (req, res) => {
  try {
    const empleados = await empleadoService.obtenerEmpleados();
    res.status(200).json(empleados);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const obtenerEmpleado = async (req, res) => {
  try {
    const empleado = await empleadoService.obtenerEmpleadoPorId(req.params.id);
    res.status(200).json(empleado);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const actualizarEmpleado = async (req, res) => {
  try {
    const empleado = await empleadoService.actualizarEmpleado(
      req.params.id,
      req.body
    );
    res.status(200).json(empleado);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const eliminarEmpleado = async (req, res) => {
  try {
    await empleadoService.eliminarEmpleado(req.params.id);
    res.status(200).json({ mensaje: "Empleado eliminado" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
