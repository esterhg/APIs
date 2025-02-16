const Joi = require("joi");

const tipo_servicioSchema = Joi.object({
    identificador: Joi.string().min(1).max(4).required(),
    nombre_Servicio: Joi.string().min(1).max(32).required(),
    tarifa: Joi.number().precision(2).required(),
    impuesto: Joi.number().precision(2).required()
});

module.exports ={
    tipo_servicioSchema 
};