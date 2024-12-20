const express = require('express');
require('dotenv').config(); // Cargar variables de entorno
const db = require('./mongoDB/db');  // Asegúrate de que esta ruta esté correcta
var cors = require('cors');
const router = require('./routes/routes');

const app = express();
app.use(express.json());
app.use(cors());

const port = process.env.PORT || 3000;  // Asignar un puerto por defecto si no está en las variables de entorno

// Conectar a la base de datos y luego iniciar el servidor
connectDB().then(() => {
    // Una vez conectados a la base de datos, configuramos las rutas
    app.use('/api', router);

    // Iniciar el servidor
    app.listen(port, () => {
        console.log(`Servidor escuchando en el puerto ${port}`);
    });
}).catch((err) => {
    console.error("Error al conectar a la base de datos:", err);
    process.exit(1);  // Si la conexión a la base de datos falla, terminamos el proceso con un código de error
});