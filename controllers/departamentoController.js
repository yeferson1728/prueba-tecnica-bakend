import * as departamentoService from "../services/departamentoService.js";

export const crearDepartamento = async (req, res) => {
  try {
    const departamento = await departamentoService.crearDepartamento(req.body);
    res.status(201).json(departamento);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const obtenerDepartamentos = async (req, res) => {
  try {
    const departamentos = await departamentoService.obtenerDepartamentos();
    res.status(200).json(departamentos);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
