import express from "express";
import listaEmpleados from "../models/empleado.js";

const listaEmpleados = "";
// Obtener todos los empleados
app.get("/empleados", async (req, res) => {
  const empleados = await empleados.find();
  res.json(empleados);
});
// Obtener un empleado por ID
app.get("/empleado/:id", async (req, res) => {
  const employee = await empleados.findById(req.params.id);
  res.json(employee);
});
// Crear un nuevo empleado
app.post("/empleado", async (req, res) => {
  const newempleados = new empleados(req.body);
  const savedempleados = await newempleados.save();
  res.json(savedempleados);
});

// Actualizar un empleado
app.put("/empleado/:id", async (req, res) => {
  const updatedempleados = await empleados.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true }
  );
  res.json(updatedempleados);
});

// Eliminar un empleado
app.delete("/empleado/:id", async (req, res) => {
  await empleados.findByIdAndDelete(req.params.id);
  res.json({ message: "empleados deleted" });
});

const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
