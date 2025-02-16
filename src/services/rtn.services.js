const { models } = require("../libs/sequelize");
const {rtnSchema}= require("../schema/rtn.schema");

class rtnServices {
  constructor() {}

  async find() {
    const res = await models.rtn.findAll();
    return res;
  }
  async findOne(id_rtn) {
    const res = await models.rtn.findByPk(id_rtn);
    return res;
  }

  async create(data) {
    try {
      const { error, value } = rtnSchema.validate(data, { stripUnKnown: true });
      if (error) {
        throw new Error(`Error de validación: ${error.details[0].message}`);
      }
      const rtn = await models.rtn.create(value);
      return rtn;
    } catch (error) {
      console.error("Error al crear RTN", error.message);
    }

  }
  async update(id, data) {

    try{
      const { error, value } = rtnSchema.validate(data, { stripUnKnown: true });
      if (error) {
        throw new Error(`Error de validación: ${error.details[0].message}`);
      }

      const rtn = await this.findOne(id);
      if(!rtn){
        throw new Error("RTN no encontrado");

      }
      await rtn.update(value);

      return rtn;
    }catch(error){
      throw error;
    }
    
  }
  async delete(id) {
    try {
      if(!id|| isNaN(id)){
        throw new Error("ID Inválido ")
      }
      const rtn = await this.findOne(id);
      if(!rtn){
        throw new Error("RTN no encontrado");

      }
      await rtn.destroy();
      return {success:true,message:"RTN eliminado correctamente"}
    } catch (error) {
      throw error;
    }
    
   
  }
}
module.exports = rtnServices;
