import mongoose from "mongoose";

const schema_usuario = new mongoose.Schema({
  nombre_usuario: {
    type: String,
    required: true,
  },
  nombre: {
    type: String,
    required: true,
  },
  genero: {
    type: String,
  },
  fecha_nacimiento: {
    type: Date,
    required: true,
  },
  contraseña: {
    type: String,
    required: true,
  },
  foto_perfil: {
    type: String,
    default:"https://res.cloudinary.com/dqfmgdiu2/image/upload/v1686938857/image_processing20200511-25230-g49lap_wt1m5s.avif"
  },
  portada: {
    type: String,
  },
  peticion_amistad: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Usuario",
    },
  ],
  chats: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Chat",
    },
  ],
  solicitudes_enviadas: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Usuario",
    },
  ],
  amigos: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Usuario",
    },
  ],
  publicaciones: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Publicaciones",
    },
  ],
  descripcion: {
    type: String,
  }
});

export default mongoose.model("Usuario", schema_usuario);