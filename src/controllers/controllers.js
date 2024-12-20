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

const ingreso_datos = async (req, res)=>{
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

const eliminar = async  (req, res) =>{

    const { id }=req.params;

 try {
    if(!id){
        return res.status(400).json({message:"el cuerpo de la solicitud no puede ir vacio"})
    }
    const eliminar_datos = await ingresar_datos.findByIdAndDelete(id)
    
    if(!eliminar_datos){
        return res.status(404).json({message:'no se encontro el id solicitado'})
    }
    res.status(200).json({ message: 'Registro eliminado con éxito' });

 } catch (error) {
    res.status(500).json({ 
        message: 'Error al eliminar el registro', 
        error: error.message 
    });
 }

}



module.exports = {
    mostrar_datos,
    ingreso_datos,
    eliminar
};