const Joi = require('joi');

const pagoTransferenciaSchema = Joi.object({
  id_Factura: Joi.number().integer().required(),
  id_Banco: Joi.number().integer().required(),
  RNT: Joi.string().max(18).required(),
  nombre: Joi.string().max(255).required()
});

module.exports ={ pagoTransferenciaSchema};
