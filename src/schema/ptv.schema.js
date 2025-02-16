const Joi = require("joi");

const ptvSchema = Joi.object({
  id_Servicio: Joi.number().integer().positive().required(),
  id_Usuario: Joi.number().integer().positive().required(),
  fecha: Joi.date().iso().required(), // Acepta YYYY-MM-DD, norma iso 
  hora_Entrada: Joi.string()
    .pattern(/^([01]\d|2[0-3]):([0-5]\d):([0-5]\d)$/) // HH:MM:SS formato 24h
    .required(),
});

module.exports = { ptvSchema };
