const ingresar_datos = require('../model/model');


const ingreso = async (req, res)=>{
    const  {nombre, guia, valor, fecha} = req.body;

    try {

        if(!nombre || !guia || !valor || !fecha){
            return res.status(400).json({message: 'hay campos sin llenar'});
        }
            const datos = new ingresar_datos({nombre, guia, valor, fecha}); 
            await datos.save()
        

        res.status(201).json({message:'datos ingresado con exito'})
        
    } catch (error) {
        res.status(500).json({message: 'Error al registrar el usuario', error: error.message })
    }


};


module.exports = {
    ingreso,
};