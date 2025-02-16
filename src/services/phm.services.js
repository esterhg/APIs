const { models } = require("../libs/sequelize");
const{phmSchema}=require("../schema/phm.schema");
class phmServices {
  constructor() {}

  async find() {
    const res = await models.phm.findAll();
    return res;
  }
  async findOne(id_Ticket) {
    const res = await models.phm.findByPk(id_Ticket);
    return res;
  }

 
  async create(data) {
    try {
      const{error,value} = phmSchema.validate(data,{stripUnknown:true});
      if(error){
        throw new Error(`Error de validación:${error.details[0].message}`);
      }
      const phm = await models.phm.create(value);
      return phm
    } catch (error) {
      console.error("Error al guardar",error.message);
      throw error;
    }
  }
  async update(id, data) {
    try {
      const{error,value}=phmSchema.validate(data,{stripUnknown:true});
      if(error){
        throw new Error(`Error de validación:${error.details[0].message}`);
      }
      const phm = await this.findOne(id);
      if(!phm){
        throw new Error("No encontrado");
      }
      await phm.update(value);
      return phm
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
      const phm = await this.findOne(id);
       if(!phm){
         throw new Error("No encontrado")
       }
      await phm.destroy();
      return {success:true,message:"Eliminado correctamente"}
    } catch (error) {
      throw error;
    }
  }
}
module.exports = phmServices;
