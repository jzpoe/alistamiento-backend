const ingresar_datos = require('../model/model');

const hecha = async (req, res)=>{

    const {id} = req.params;
    const {hecho} = req.body;

    try {
        
        await ingresar_datos.updateOne({_id: id}, {$set:{hecho}})
        res.status(200).send({ message: "Elemento marcado como hecho" });


    } catch (error) {
        console.error(error);
        res.status(500).send({ error: "Error al marcar como hecho" }); 
    }
}

module.exports = {
    hecha,
}