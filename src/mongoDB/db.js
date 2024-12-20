const mongoose = require('mongoose');
require('dotenv').config(); // Cargar variables de entorno

const MONGODB_URI = process.env.MONGODB_URI; // URI de la base de datos desde .env

const connectDB = async () => {
    try {
        await mongoose.connect(MONGODB_URI, {
            
        });
        console.log('Conexión a MongoDB exitosa');
    } catch (error) {
        console.error('Error al conectar a MongoDB:', error);
        process.exit(1); // Termina el proceso si hay un error
    }
};

module.exports = connectDB;
