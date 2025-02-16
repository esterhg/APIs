const { models } = require("../libs/sequelize");
const {phvSchema}=require("../schema/phv.schema");

class phvServices {
  constructor() {}

  async find() {
    const res = await models.phv.findAll();
    return res;
  }
  async findOne(id_Ticket) {
    const res = await models.phv.findByPk(id_Ticket);
    return res;
  }

  async create(data) {
    try {
      const{error,value} =phvSchema.validate(data,{stripUnknown:true});
      if(error){
        throw new Error(`Error de validación:${error.details[0].message}`);
      }
      const phv = await models.phv.create(value);
      return phv
    } catch (error) {
      console.error("Error al guardar",error.message);
      throw error;
    }
  }
  async update(id, data) {
    try {
      const{error,value}=phvSchema.validate(data,{stripUnknown:true});
      if(error){
        throw new Error(`Error de validación:${error.details[0].message}`);
      }
      const phv = await this.findOne(id);
      if(!phv){
        throw new Error("No encontrado");
      }
      
      await phv.update(value);
      return phv
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
      const phv = await this.findOne(id);
       if(!phv){
         throw new Error("No encontrado")
       }
      await phv.destroy();
      return {success:true,message:"Eliminado correctamente"}
    } catch (error) {
      throw error;
    }
  }
}
module.exports = phvServices;
