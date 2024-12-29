const express = require('express');
const ingreso_datos = require('../controllers/mostrar_datos');
const eliminar_datos = require('../controllers/eliminar_datos')
const register = require('../controllers/register')
const login = require('../controllers/login')

const router = express.Router();


router.get('/datos', ingreso_datos.mostrar_datos)
router.post('/agregar_nueva_guia', ingreso_datos.mostrar_datos);
router.delete('/eliminar:id', eliminar_datos.eliminar)
router.post('/register', register.register)
router.post('/login', login.login)




module.exports = router;



