const Joi = require("joi");
const Decimal = (value, helpers) => {
  const valueStr = value.toString();
  if (valueStr.includes(".")) {
    const decimalPart = valueStr.split(".")[1];
    if (decimalPart.length > 2) {
      return helpers.error("number.maxDecimal");
    }
  }
  return value;
};
const nofacturaSchema = Joi.object({
  id_Nofactura: Joi.number().integer(),
  id_Ticket: Joi.number().integer().required(),
  id_Servicio: Joi.number().integer().required(),
  id_datosFactura: Joi.number().integer().required(),
  id_Usuario: Joi.number().integer().required(),
  Fecha: Joi.date().iso().required(),
  hora_Salida: Joi.string()
    .pattern(/^([01]\d|2[0-3]):([0-5]\d):([0-5]\d)$/)
    .required()
    .messages({
      "string.pattern.base": "hora_Salida debe tener el formato HH:mm:ss",
    }),
  subtotal: Joi.number()
    .custom(Decimal, "Decimal precision validation")
    .required()
    .messages({
      "number.maxDecimal": "El subtotal debe tener máximo 2 decimales.",
    }),
  ISV: Joi.number()
    .custom(Decimal, "Decimal precision validation")
    .required()
    .messages({
      "number.maxDecimal": "El ISV debe tener máximo 2 decimales.",
    }),
  total: Joi.number()
    .custom(Decimal, "Decimal precision validation")
    .required()
    .messages({
      "number.maxDecimal": "El total debe tener máximo 2 decimales.",
    }),
  Recibido: Joi.number()
    .custom(Decimal, "Decimal precision validation")
    .required()
    .messages({
      "number.maxDecimal": "El recibido debe tener máximo 2 decimales.",
    }),
  cambio: Joi.number()
    .custom(Decimal, "Decimal precision validation")
    .required()
    .messages({
      "number.maxDecimal": "El cambio debe tener máximo 2 decimales.",
    }),
});

module.exports = { nofacturaSchema };
