const mongoose = require('mongoose');

const ingreso= new mongoose.Schema ({
    nombre: { type: String, required: true,  }, // El campo `username` debe ser único unique: true
  guia: { type: Number, required: true }, // El campo `password` debe ser obligatorio
  valor: { type: Number, required: true }, // El campo `password` debe ser obligatorio
  fecha: { type: Date, required: true } // El campo `password` debe ser obligatorio
})


const ingresar_datos = mongoose.model('ingresar_datos', ingreso);

module.exports = ingresar_datos;