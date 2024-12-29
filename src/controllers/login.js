const ingresar_login = require('../model/model_login');
const bcrypt = require('bcrypt');


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
        if(!validarPassword){
             return res.status(400).json({message: 'Contraseña o usuario incorrecto'});      
        }
        res.status(200).json({message: 'Usuario logueado con éxito'});

    } catch (error) {
        res.status(500).json({message: 'Error al loguear el usuario', error: error.message })
    
    }

}


module.exports = {
    login
};