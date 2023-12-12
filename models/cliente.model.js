import mongoose from 'mongoose';

const clienteSchema = new mongoose.Schema(
  {
    // idCliente: { type: mongoose.Schema.ObjectId, required: true },
    nombre: { type: String },
    apellido: { type: String },
    correo: { type: String },
    edad: { type: String },
    contrasena: { type: String },
  },
  {
    timestamps: true,
  }
);

const cliente = mongoose.model('clientes', clienteSchema);

export default cliente;
