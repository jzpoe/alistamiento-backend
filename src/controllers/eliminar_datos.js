const ingresar_datos = require('../model/model');

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
    eliminar
}
