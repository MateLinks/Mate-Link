import mongoose from "mongoose";

const schema_chat = new mongoose.Schema({
  integrantes: [{ // <=== integrantes del chat
    type: mongoose.Schema.Types.ObjectId,
    ref: "Usuario",
    require: true,
  }],
  mensaje_txt: [{ // <=== mensaje_txt
    type: mongoose.Schema.Types.ObjectId,
    ref: "Mensaje"
  }],
  titulo: { // <=== nombre del chat
    type: String
  },
  grupo: { //<=== chat == grupo ? '+1 receptor' : '1 receptor';
      type: Boolean,
      default:false
  }
});

export default mongoose.model("Chat", schema_chat);
