const { models } = require("../libs/sequelize");
const{pdvSchema}=require("../schema/pdv.schema");
class pdvServices {
  constructor() {}

  async find() {
    const res = await models.pdv.findAll();
    return res;
  }
  async findOne(id_Ticket) {
    const res = await models.pdv.findByPk(id_Ticket);
    return res;
  }

  async create(data) {
    try {
      const{error,value} = pdvSchema.validate(data,{stripUnknown:true});
      if(error){
        throw new Error(`Error de validación:${error.details[0].message}`);
      }
      const pdv= await models.pdv.create(value);
      return pdv
    } catch (error) {
      console.error("Error al guardar",error.message);
      throw error;
    }
  }
  async update(id, data) {
    try {
      const{error,value}=pdvSchema.validate(data,{stripUnknown:true});
      if(error){
        throw new Error(`Error de validación:${error.details[0].message}`);
      }
      const pdv= await this.findOne(id);
      if(!pdv){
        throw new Error("No encontrado");
      }
      await pdv.update(value);
      return pdv
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
      const pdv= await this.findOne(id);
       if(!pdv){
         throw new Error("No encontrado")
       }
      await pdv.destroy();
      return {success:true,message:"Eliminado correctamente"}
    } catch (error) {
      throw error;
    }
  }
}
module.exports = pdvServices;
