import mongoose from "mongoose";

const shcema_mensaje = new mongoose.Schema({
    emisor: {// <==== Emisor
        type: mongoose.Schema.Types.ObjectId,
        ref: "Usuario",
        require: true,
    },
    receptores: [// <==== Receptor/a/es
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Usuario",
            require: true,
        },
    ],
    mensaje_txt: {
        // <==== mensaje
        type: String,
        require: true,
    },
    fecha_emision: { // <=== fecha_emision
        type: Date,
        default: Date.now,
    },
});

export default mongoose.model("Mensaje", shcema_mensaje);
