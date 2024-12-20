const express = require('express');
const ingreso_datos = require('../controllers/controllers');
const eliminar = require('../controllers/controllers')

const router = express.Router();


router.get('/datos', ingreso_datos.mostrar_datos)
router.post('/agregar_nueva_guia', ingreso_datos.ingreso_datos);
router.delete('/eliminar:id', ingreso_datos.eliminar)




module.exports = router;



