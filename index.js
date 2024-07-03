// Importaciones
import connection from "./database/connection.js";
import express, { json, urlencoded } from "express";
import cors from "cors";
import UserRoutes from './routes/user.js'
import PublicationRoutes from './routes/publications.js'
import FollowRoutes from './routes/follow.js'
import bodyParser from 'body-parser';
import path from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';


// Mensaje de bienvenida
console.log("API NODE arriba");

// Conexión a la BD
connection();


// Crear servidor de Node
const app = express();
const puerto = process.env.PORT || 3900;

// Lista de orígenes permitidos
const allowedOrigins = ['http://localhost:5173', 'https://backend-api-rest-socialnet.vercel.app'];

// Configurar cors: permite que las peticiones se hagan correctamente
// Configurar CORS dinámicamente
app.use(cors((req, callback) => {
  let corsOptions;
  if (allowedOrigins.indexOf(req.header('Origin')) !== -1) {
    corsOptions = { origin: true, methods: 'GET,HEAD,PUT,PATCH,POST,DELETE', credentials: true };
  } else {
    corsOptions = { origin: false }; // No permitir este origen
  }
  callback(null, corsOptions); // Enviar las opciones de CORS
}));

// Conversión de datos (body a objetos JS)
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Configurar rutas
app.use('/api/user', UserRoutes);
app.use('/api/publication', PublicationRoutes);
app.use('/api/follow', FollowRoutes);

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);


// Configuración para servir archivos estáticos (imágenes de avatar)
app.use('/uploads/avatars', express.static(path.join(__dirname, 'uploads', 'avatars')));

// Configuración para servir archivos estáticos (imágenes de publicaciones)
app.use('/uploads/publications', express.static(path.join(__dirname, 'uploads', 'publications')));


// Configurar el servidor para escuchar las peticiones HTTP
app.listen(puerto, () => {
  console.log("Servidor de NODE corriendo en el puerto", puerto)
});