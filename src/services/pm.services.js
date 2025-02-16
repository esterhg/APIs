const { models } = require("../libs/sequelize");
const{pmSchema}=require("../schema/pm.schema");
class pmServices {
  constructor() {}

  async find() {
    const res = await models.pm.findAll();
    return res;
  }
  async findOne(id_Ticket) {
    const res = await models.pm.findByPk(id_Ticket);
    return res;
  }

  async create(data) {
    try {
      const{error,value} = pmSchema.validate(data,{stripUnknown:true});
      if(error){
        throw new Error(`Error de validación:${error.details[0].message}`);
      }
      const pm = await models.pm.create(value);
      return pm
    } catch (error) {
      console.error("Error al guardar",error.message);
      throw error;
    }
  }
  async update(id, data) {
    try {
      const{error,value}=pmSchema.validate(data,{stripUnknown:true});
      if(error){
        throw new Error(`Error de validación:${error.details[0].message}`);
      }
      const pm = await this.findOne(id);
      if(!pm){
        throw new Error("No encontrado");
      }
      await pm.update(value);
      return pm
    } catch (error) {
      console.error("Error al actualizar");
      throw error;
    }
  }
   async delete(id) {
    try {
      if(!id|| isNaN(id)){
        throw new Error("ID Inválido ")
      }
      const pm = await this.findOne(id);
       if(!pm){
         throw new Error("No encontrado")
       }
      await pm.destroy();
      return {success:true,message:"Eliminado correctamente"}
    } catch (error) {
      throw error;
    }
  }
}
module.exports = pmServices;
