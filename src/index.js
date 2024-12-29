const express = require('express');
require('dotenv').config(); // Cargar variables de entorno
const connectDB = require('./mongoDB/db');  // Asegúrate de que esta ruta esté correcta
var cors = require('cors');
const router = require('./routes/routes');

const app = express();
app.use(express.json());
app.use(cors());

const port = process.env.PORT || 3000;  // Asignar un puerto por defecto si no está en las variables de entorno

// Conectar a la base de datos
connectDB();
    app.use('/api', router);

    // Iniciar el servidor
    app.listen(port, () => {
        console.log(`Servidor escuchando en el puerto ${port}`);
    });
