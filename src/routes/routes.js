const express = require('express');
const eliminar_datos = require('../controllers/eliminar_datos')
const register = require('../controllers/register')
const login = require('../controllers/login');
const tarea_hecha = require('../controllers/tarea_hecha');
const ingresoDatos = require('../controllers/ingresoDatos');
const mostrar_datos = require('../controllers/mostrar_datos');

const router = express.Router();

router.get('/datos', mostrar_datos.mostrarData);
router.post('/agregar', ingresoDatos.ingreso)
router.delete('/eliminar:id', eliminar_datos.eliminar)
router.post('/register', register.register)
router.post('/login', login.login)
router.patch('/hecho/:id', tarea_hecha.hecha)




module.exports = router;



