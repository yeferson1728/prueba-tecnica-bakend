import mongoose from "mongoose";
// import cors from 'cors';
// import bcrypt from "bcryptjs";

const empleadoSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
});
export default empleadoSchema;
