import Empleado from "../models/empleado.js";

export const crearEmpleado = async (data) => {
  try {
    const empleado = new Empleado(data);
    await empleado.save();
    return empleado;
  } catch (error) {
    throw new Error("Error al crear el empleado");
  }
};

export const obtenerEmpleados = async () => {
  try {
    const empleados = await Empleado.find().populate("departamentoId");
    return empleados;
  } catch (error) {
    throw new Error("Error al obtener los empleados");
  }
};

export const obtenerEmpleadoPorId = async (id) => {
  try {
    const empleado = await Empleado.findById(id);
    if (!empleado) throw new Error("Empleado no encontrado");
    return empleado;
  } catch (error) {
    throw new Error("Error al obtener el empleado");
  }
};

export const actualizarEmpleado = async (id, data) => {
  try {
    const empleado = await Empleado.findByIdAndUpdate(id, data, { new: true });
    if (!empleado) throw new Error("Empleado no encontrado");
    return empleado;
  } catch (error) {
    throw new Error("Error al actualizar el empleado");
  }
};

export const eliminarEmpleado = async (id) => {
  try {
    await Empleado.findByIdAndDelete(id);
  } catch (error) {
    throw new Error("Error al eliminar el empleado");
  }
};
