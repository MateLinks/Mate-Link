import mongoose from "mongoose";

const schema_publicaciones = new mongoose.Schema({
    fecha: {
        type: Date,
        require: true,
    },
    publicacion_origen: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Usuario",
        require: true,
    },
    reacciones: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Reacciones",
        },
    ],
    comentarios: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Comentarios",
        },
    ],
    visible_usuarios: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Usuarios",
        },
    ],
    publicacion_texto: {
        type: String,
    },
    publicacion_img: [
        {
            type: String
        }
    ],
});

export default mongoose.model("Publicaciones", schema_publicaciones);
