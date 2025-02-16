const Joi = require("joi");

const datosfacturacionSchema = Joi.object({
  cai: Joi.string().max(64).required(),
  RTN: Joi.string().length(14).pattern(/^\d+$/).required(),
  fechaEmision: Joi.date().iso().required(),
  RangoInicial: Joi.string().max(64).required(),
});

module.exports = { datosfacturacionSchema };
