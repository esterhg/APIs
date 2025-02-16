const Joi = require("joi");

const tipopagofacturaSchema = Joi.object({
  name_TipoPago: Joi.string().min(1).max(20).required(),
});

module.exports ={
  tipopagofacturaSchema
};