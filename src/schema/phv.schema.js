const Joi = require("joi");

const phvSchema = Joi.object({
  id_Servicio: Joi.number().integer().positive().required(),
  id_Usuario: Joi.number().integer().positive().required(),
  fecha: Joi.date().iso().required(),
  hora_Entrada: Joi.string()
    .pattern(/^([01]\d|2[0-3]):([0-5]\d):([0-5]\d)$/)
    .required(),
});

module.exports = { phvSchema };
