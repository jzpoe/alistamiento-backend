const ingresar_datos = require('../model/model');


const mostrar_datos = async (req, res)=>{
    try {
        const datos_mostrar = await ingresar_datos.find()
        if(!datos_mostrar){
            return res.status(404).json({message:'no hay nada que mostrar'})
        }
        
        res.status(200).json(datos_mostrar); // Enviar los datos como JSON
    } catch (error) {
        res.status(500).json({message: 'Error al mostrar información', error: error.message })

    }
};


module.exports = {
    mostrar_datos,
};