import mongoose from "mongoose";

const schema_comentario = new mongoose.Schema({
  comentario_txt: {
    type: String,
  },
  reaccion: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Reaccion",
  },
  fecha_emision: {
    type: Date,
    require: true,
  },
  emisor_comentario: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Usuario",
    require: true,
  },
});

export default mongoose.model("Comentario", schema_comentario);
