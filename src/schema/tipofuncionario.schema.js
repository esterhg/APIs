const Joi = require("joi");
const tipofuncionarioSchema=Joi.object({
    tipo_Funcionario : Joi.string().min(1).max(32).required()
});
module.exports={
    tipofuncionarioSchema
};