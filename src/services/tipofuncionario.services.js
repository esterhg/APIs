const { models } = require("../libs/sequelize");
const { tipofuncionarioSchema } = require("../schema/tipofuncionario.schema");

class tipofuncionarioServices {
  constructor() { }

  async find() {
    const res = await models.tipofuncionario.findAll();
    if(!res){
      throw new Error("No se encontraron Tipos funcionarios");
    }
    return res;
  }
  async findOne(id_Funcionario) {
    const res = await models.tipofuncionario.findByPk(id_Funcionario);
    if(!res){
      throw new Error("Tipo funcionario no encontrado");
    }
    return res;
  }

  async create(data) {
    try {
      const { error, value } = tipofuncionarioSchema.validate(data, { stripUnknown: true });
      if (error) {
        throw new Error(`Error de validación`)
      }
      const tipofuncionario = await models.tipofuncionario.create(value);
      return tipofuncionario
    } catch (error) {
      console.error("Error al crear usuario:", error.message);
      throw error;
    }
  }
  async update(id, data) {
    try {
      const { error, value } = tipofuncionarioSchema.validate(data, { stripUnknown: true });
      if (error) {
        throw new Error(`Error de validacion: ${error.details[0].message}`);

      }
      const tipofuncionario = await this.findOne(id);
      if (!tipofuncionario) {
        throw new Error("Tipo funcionario no encontrado");
      }
      await tipofuncionario.update(value);
      return tipofuncionario
    } catch (error) {
      console.error("Error al actualizar tipo funcionario", error.message);
      throw error;
    }

  }
  async delete(id) {
    try {
      if(!id|| isNaN(id)){
        throw new Error("ID Inválido")
      }
      const tipofuncionario = await this.findOne(id);
      if (!tipofuncionario) {
        throw new Error("Tipo funcionario no encontrado");
      }
      await tipofuncionario.destroy();
      return {success:true,message:"Tipo funcionario eliminado correctamente"}
    } catch (error) {
      throw error;
    }
  }
}
module.exports = tipofuncionarioServices;
