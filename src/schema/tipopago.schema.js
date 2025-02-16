const Joi = require("joi");

const tipopagoSchema = Joi.object({
    tipo_Pago: Joi.string().min(1).max(20).required()
});

module.exports={
    tipopagoSchema
};