const Joi = require('joi');

const bancoSchema = Joi.object({
  nombreBanco: Joi.string().max(32).required()
});

module.exports = {bancoSchema};
