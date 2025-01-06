const ingresar_login = require('../model/model_login');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
require('dotenv').config(); // Cargar variables de entorno



const login = async (req, res)=>{

    const {usuario, password} = req.body;

    try {
        if(!usuario || !password){
            return res.status(400).json({message: 'hay campos sin llenar'});
        }

        const nuevoRegistro = await ingresar_login.findOne({usuario});
        if(!nuevoRegistro){
            return res.status(400).json({message: 'Usuario no registrado, debe registrarse'});
        }

        const validarPassword = await bcrypt.compare(password, nuevoRegistro.password);
        if(validarPassword){

             // Generar JWT
            const token = jwt.sign({id: nuevoRegistro._id}, process.env.JWT_SECRET, {
                expiresIn: 86400
            });
    
                // Enviar token como cookie HTTP-only
            res.cookie('token', token, {
                httpOnly: true,
                secure: process.env.NODE_ENV === 'production', // Solo HTTPS en producción
                maxAge: 86400 * 1000, // 24 horas
              });
              res.status(200).json({ message: 'Usuario logueado con éxito' });
        }
        else{
            res.status(400).json({message: 'Contraseña incorrecta'});
        }

           
        

    } catch (error) {
        res.status(500).json({message: 'Error al loguear el usuario', error: error.message })
    
    }

}


module.exports = {
    login
};