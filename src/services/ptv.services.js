const { models } = require("../libs/sequelize");
const { ptvSchema}= require("../schema/ptv.schema");
class ptvServices {
  constructor() {}

  async find() {
    const res = await models.ptv.findAll();
    if(!res){
      throw new Error("No se encontraron datos");
    }
    return res;
  }
  async findOne(id_Ticket) {
    const res = await models.ptv.findByPk(id_Ticket);
    if(!res){
      throw new Error("El ticket no fue encontrado");
    }
    return res;
  }

  async create(data) {
    try {
      const{error,value}=ptvSchema.validate(data,{stripUnknown:true});
      if(error){
        throw new Error(`Error de validación:${error.details[0].message}`);
      }
      const ptv = await models.ptv.create(value);
      return ptv
    } catch (error) {
      console.error("Error al guardar", error.message);
      throw error;
      
    }
  }
  async update(id, data) {
    try {
      const{error,value}= ptvSchema.validate(data,{stripUnknown:true});
      if(error){
       throw new Error(`Error de validación: ${error.details[0].message}`);
      }
      const ptv = await this.findOne(id);
      if(!ptv){
        throw new Error("No encontrado")
      }
      await ptv.update(value);
      return ptv
   } catch (error) {
     console.error("Error al actualizar rol usuario");
     throw error;
   }
 
  }
  async delete(id) {
    try {
      if(!id|| isNaN(id)){
        throw new Error("ID Inválido ")
      }
      const ptv = await this.findOne(id);
       if(!ptv){
         throw new Error("No encontrado")
       }
      await ptv.destroy();
      return {success:true,message:"Eliminado correctamente"}
    } catch (error) {
      throw error;
    }
  }
}
module.exports = ptvServices;
