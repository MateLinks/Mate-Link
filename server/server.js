//=========/ importaciones /=============
import express from "express";
import morgan from 'morgan';
import cors from 'cors';
import { URL_DB_pro, PORT } from './src/config.js';

//====/ conexion con Base de Datos /=======
// import { connectMongoDB } from './src/db/db.js';

//======== importacion de rutas =========
import router_principal from './src/router/router.principal.js';

//======== constantes ==========
const server = express();

// ======= middlewares =======
// connectMongoDB(URL_DB_pro);
server.use(morgan('dev'));
server.use(express.json());
server.use(cors());
server.use(express.urlencoded({ extended: true }));

//======== Rutas =========
server.use(router_principal);

server.listen(PORT || 3001, () => {
  console.log(`Server on port: http://127.0.0.1:${PORT}`);
});

