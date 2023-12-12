import mongoose from 'mongoose';

const publicacionSchema = new mongoose.Schema(
  {
    idCliente: { type: mongoose.Schema.ObjectId, required: true },
    nombre: { type: String },
    titulo: { type: String },
    fechaPublicacion: { type: Date },
    contenido: { type: String },
  },
  {
    timestamps: true,
  }
);

const publicacion = mongoose.model('publicaciones', publicacionSchema);

export default publicacion;
