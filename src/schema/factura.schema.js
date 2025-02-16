const Joi = require("joi");

const facturaSchema = Joi.object({
  id_Factura: Joi.number().integer().positive(),
  id_Ticket: Joi.number().integer().positive().required(),
  id_Servicio: Joi.number().integer().positive().required(),
  id_datosFactura: Joi.number().integer().positive().required(),
  id_Usuario: Joi.number().integer().positive().required(),
  Fecha: Joi.date().iso().required(),
  hora_Salida: Joi.string()
    .pattern(/^([01]\d|2[0-3]):([0-5]\d):([0-5]\d)$/)
    .required(),
  subtotal: Joi.number().precision(2).positive().required(),
  ISV: Joi.number().precision(2).min(0).required(),
  total: Joi.number().precision(2).positive().required(),
  tipo_Cliente: Joi.string().max(64).required(),
  Recibido: Joi.number().precision(2).min(0).required(),
  cambio: Joi.number().precision(2).min(0).required(),
  id_TipoPago: Joi.number().integer().positive().required(),
});

module.exports = { facturaSchema };
