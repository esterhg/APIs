const Joi = require("joi");

const estadofacturaSchema = Joi.object({
  id_EstadoFactura: Joi.number().integer(),
  id_Factura: Joi.number().integer().required(),
  Estado: Joi.string().max(11).required()
});

module.exports = { estadofacturaSchema };
