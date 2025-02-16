const Joi = require('joi');

const  rolesSchema = Joi.object({
  nombre_Rol: Joi.string().min(3).max(32).required()
});


module.exports = {
  rolesSchema
};