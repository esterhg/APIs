const Joi = require('joi');

const rtnSchema = Joi.object({
  id_Ticket: Joi.number().integer().required(),
  id_Servicio: Joi.number().integer().required(),
  RNT: Joi.string().pattern(/^\d{14}$/).required().messages({
    "string.pattern.base":
      "El RTN debe de tener 14 digitos y no debe contener letras",
  }),
  nombre: Joi.string().max(255).required()
});

module.exports = {rtnSchema};
