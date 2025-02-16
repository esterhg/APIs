const Joi = require("joi");

const tipoestacionamientoSchema = Joi.object({
    tipo_Estacionamiento: Joi.string().min(1).max(32).required(),

});

module.exports = {
    tipoestacionamientoSchema
};