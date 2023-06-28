import { Router } from "express";
import { PORT } from "../config.js";

const router_principal = Router();

router_principal.get('/info', (req, res) => {
    const base = `http://localhost:${PORT}`
    res.json({
        '/info': {
            "descripcion": 'indice de todas las rutas',
            "path": `${base}/info`,
            "metodo": 'GET',
        },
        '/user': {
            "GET": [
                {
                    "descripcion": 'indice de todas las rutas',
                    "path": `${base}/user/users`,
                },
                {
                    "descripcion": 'indice de todas las rutas',
                    "path": `${base}/user/info`,
                },
                {
                    "descripcion": 'indice de todas las rutas',
                    "path": `${base}/user/:userName`,
                },
            ],
            "POST": [
                {
                    "descripcion": 'indice de todas las rutas',
                    "path": `${base}/user/register`,
                },
                {
                    "descripcion": 'indice de todas las rutas',
                    "path": `${base}/user/login`,
                }
            ]
        },
        '/publication': {
            "GET": [
                {
                    "descripcion": 'indice de todas las rutas',
                    "path": `${base}/publication/all`,
                },
                {
                    "descripcion": 'indice de todas las rutas',
                    "path": `${base}/publication/:id`,
                }
            ],
            'POST': [
                {
                    "descripcion": 'indice de todas las rutas',
                    "path": `${base}/publication/`,
                }
            ],
            'PUT': [
                {
                    "descripcion": 'indice de todas las rutas',
                    "path": `${base}/publication/`,
                }
            ],
            'DELETE': [
                {
                    "descripcion": 'indice de todas las rutas',
                    "path": `${base}/publication/:id`,
                }
            ]
        },
        '/chat': {
            'GET': [
                {
                    'descripcion': 'Ruta para muestra de ',
                    'path': `${base}/chat/:id`
                },
                {
                    'descripcion': 'Ruta para muestra de ',
                    'path': `${base}/chat/general/:userid`
                }
            ],
            'POST': [
                {
                    'descripcion': 'Ruta para carga de nuevo chat ',
                    'path': `${base}/chat/create`
                }
            ]
        }
    })
})

export default router_principal;