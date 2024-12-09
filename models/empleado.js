import mongoose from "mongoose";

const empleadoSchema = new mongoose.Schema(
  {
    nombre: { type: String, required: true },
    apellido: { type: String, required: true },
    edad: { type: Number, required: true },
    puesto: { type: String, required: true },
    departamentoId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Departamento",
    },
  },
  { timestamps: true }
);

const Empleado = mongoose.model("Empleado", empleadoSchema);
export default Empleado;
