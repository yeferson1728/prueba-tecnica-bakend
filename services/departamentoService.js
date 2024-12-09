import Departamento from "../models/departamento.js";

export const crearDepartamento = async (data) => {
  try {
    const departamento = new Departamento(data);
    await departamento.save();
    return departamento;
  } catch (error) {
    throw new Error("Error al crear el departamento");
  }
};

export const obtenerDepartamentos = async () => {
  try {
    const departamentos = await Departamento.find();
    return departamentos;
  } catch (error) {
    throw new Error("Error al obtener los departamentos");
  }
};
