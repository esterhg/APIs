const { models } = require("../libs/sequelize");
const {bancoSchema}= require("../schema/banco.schema");

class bancoServices {
  constructor() {}

  async find() {
    const res = await models.banco.findAll();
    return res;
  }
  async findOne(id_Banco) {
    const res = await models.banco.findByPk(id_Banco);
    return res;
  }

  async create(data) {
    try {
      const { error, value } = bancoSchema.validate(data, { stripUnKnown: true });
      if (error) {
        throw new Error(`Error de validación: ${error.details[0].message}`);
      }
      const banco = await models.banco.create(value);
      return banco;
    } catch (error) {
      console.error("Error al crear Banco", error.message);
    }

  }
  async update(id, data) {

    try{
      const { error, value } = bancoSchema.validate(data, { stripUnKnown: true });
      if (error) {
        throw new Error(`Error de validación: ${error.details[0].message}`);
      }

      const banco = await this.findOne(id);
      if(!banco){
        throw new Error("Banco no encontrado");

      }
      await banco.update(value);

      return banco;
    }catch(error){
      throw error;
    }
    
  }
  async delete(id) {
    try {
      if(!id|| isNaN(id)){
        throw new Error("ID Inválido ")
      }
      const banco = await this.findOne(id);
      if(!banco){
        throw new Error("Banco no encontrado");

      }
      await banco.destroy();
      return {success:true,message:"Banco eliminado correctamente"}
    } catch (error) {
      throw error;
    }
    
   
  }
}
module.exports = bancoServices;
