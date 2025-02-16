const Joi = require("joi");

const rol_usuarioSchema = Joi.object({
    id_Usuario: Joi.number().required(),
    id_Rol: Joi.number().required()
});

module.exports={
    rol_usuarioSchema
};