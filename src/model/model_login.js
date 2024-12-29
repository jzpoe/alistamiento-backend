const mongoose = require('mongoose');

const register_login= new mongoose.Schema ({
    nombre: { type: String, required: true,  }, // El campo `nombre` debe ser único unique: true
  usuario: { type: String, required: true }, // El campo `usuario` debe ser obligatorio
  password: { type: String, required: true }, // El campo `password` debe ser obligatorio
 
})


const ingresar_login = mongoose.model('register_login', register_login);

module.exports = ingresar_login;