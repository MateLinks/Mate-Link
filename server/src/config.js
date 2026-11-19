// ==== import de doten ======
import * as dotenv from "dotenv";
dotenv.config();

// ===== / variables / =====
const {
    // ====== Puerto =======
    PORT,
    // ===== MongoDB =======
    URL_DB_dev,
    URL_DB_pro,
    // ======= JWT =========
    TOKEN_JWT,
    // ==== CLOUDINARY =====
    CLOUDINARY_CN,
    CLOUDINARY_AKEY,
    CLOUDINARY_ASECRET,
    // ===== PUSHER =====
    PUSHER_appId,
    PUSHER_key,
    PUSHER_secret,
    PUSHER_cluster,
    PUSHER_useTLS,
} = process.env;

export {
    PORT,
    URL_DB_dev,
    URL_DB_pro,
    CLOUDINARY_CN,
    CLOUDINARY_AKEY,
    CLOUDINARY_ASECRET,
    PUSHER_appId,
    PUSHER_key,
    PUSHER_secret,
    PUSHER_cluster,
    PUSHER_useTLS,
};
