import mongoose from 'mongoose';

const eventoSchema = new mongoose.Schema(
  {
    idCliente: { type: mongoose.Schema.ObjectId, required: true },
    nombre: { type: String },
    titulo: { type: String },
    fechaInicio: { type: Date },
    contenido: { type: String },
    link: { type: String },
  },
  {
    timestamps: true,
  }
);

const evento = mongoose.model('eventos', eventoSchema);

export default evento;
