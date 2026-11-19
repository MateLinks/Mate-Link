import mongoose from "mongoose";

const schema_reaccion = new mongoose.Schema({
    tipo_reaccion: {
        type: Number,
        require: true,
    },
    reaccion_usuario: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Usuario",
        require: true,
    },
});
export default mongoose.model("Reaccion", schema_reaccion);
