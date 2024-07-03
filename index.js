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

// Configurar CORS dinámicamente en Vercel
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*'); // Permitir todos los orígenes, ajusta según necesites
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS'); // Métodos permitidos
  res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept'); // Encabezados permitidos
  if (req.method === 'OPTIONS') {
    res.status(200).end();
  } else {
    next();
  }
});

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

export default app; // Exportar la aplicación de Express para Vercel