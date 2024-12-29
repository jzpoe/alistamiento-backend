const ingresar_login = require('../model/model_login');
const bcrypt = require('bcrypt');

const register = async (req, res)=>{
    const  {nombre, usuario, password} = req.body;

    try {
        if(!nombre || !usuario || !password){
            return res.status(400).json({message: 'hay campos sin llenar'});
        }

        const usuarioExistente = await ingresar_login.findOne({usuario});
        if(usuarioExistente){
            return res.status(400).json({message: 'Usuario ya registrado'});
        }

        const encriptarDatos = await bcrypt.hash(password, 10);

            const datos = new ingresar_login({nombre, usuario, password: encriptarDatos}); 
            await datos.save()
            res.status(201).json({ message: 'Usuario registrado con éxito' });

    } catch (error) {
        res.status(500).json({message: 'Error al registrar el usuario', error: error.message })
    }
}

module.exports = {
    register
};