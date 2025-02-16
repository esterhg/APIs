const Joi = require("joi");

const UsuarioSchema = Joi.object({
  nombre: Joi.string().min(3).max(64).required(),
  contrasena: Joi.string()
    .min(8)
    .pattern(new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])"))
    .required()
    .messages({
      "string.pattern.base":
        "La contraseña debe contener al menos una mayúscula, una minúscula, un número y un carácter especial",
    }),
  id_Rol: Joi.number().integer().positive().required(),
});

module.exports = {
  UsuarioSchema  
};
