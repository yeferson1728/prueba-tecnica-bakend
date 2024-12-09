import mongoose from "mongoose";

const departamentoSchema = new mongoose.Schema(
  {
    nombre: { type: String, required: true },
    codigo: { type: Number, required: true },
  },

  { timestamps: true }
);

const Departamento = mongoose.model("Departamento", departamentoSchema);
export default Departamento;
