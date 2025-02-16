const Joi = require("joi");

const datosmSchema = Joi.object({
  id_Ticket: Joi.number().integer().required(),
  id_Funcionario: Joi.number().integer().required(),
  id_Estacionamiento: Joi.number().integer().required(),
  id_Pago: Joi.number().integer().required(),
  nombre: Joi.string().max(64).required(),
  Tipo_Vehiculo: Joi.string().max(32).required(),
  marca: Joi.string().max(32).required(),
  modelo: Joi.string().max(32).required(),
  Placa: Joi.string().max(32).required(),
  Telefono: Joi.string().pattern(/^\d+$/).max(32).required().messages({
    "string.pattern.base": "El teléfono solo debe contener números."
  }),
  id_institucion: Joi.number().integer().required()
});

module.exports = { datosmSchema };
