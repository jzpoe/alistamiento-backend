const express = require('express');
require('dotenv').config(); // Cargar variables de entorno
const db = require ('./mongoDB/db')
var cors = require('cors');
const router = require('./routes/routes');

const app = express();
app.use(express.json());
app.use(cors()); 

const port =process.env.PORT;


app.use('/api', router);

connectDB().then(() => {
    app.use('/api', router);

    // Iniciar el servidor
    app.listen(port, () => {
        console.log(`Servidor escuchando en el puerto ${port}`);
    });
});
