const express = require('express');
require('dotenv').config(); // Cargar variables de entorno
const db = require ('./mongoDB/db')
var cors = require('cors');
const router = require('./routes/routes');

const app = express();
app.use(express.json());
// Configuración de CORS
const corsOptions = {
    origin: 'https://alistamiento-front.vercel.app', // Cambia esto al dominio de tu frontend
    methods: ['GET', 'POST', 'PUT', 'DELETE'], // Métodos permitidos
    allowedHeaders: ['Content-Type', 'Authorization'], // Encabezados permitidos
};

app.use(cors(corsOptions)); // Aplica la configuración de CORS
const port =process.env.PORT;


app.use('/api', router);


app.listen(port, () => {
    console.log(`Servidor escuchando en el puerto ${port}`);
});