const { models } = require("../libs/sequelize");
const{pdmSchema}=require("../schema/pdm.schema");
class pdmServices {
  constructor() {}

  async find() {
    const res = await models.pdm.findAll();
    if(!res){
      throw new Error("No se encontraron datos");
    }
    return res;
  }
  async findOne(id_Ticket) {
    const res = await models.pdm.findByPk(id_Ticket);
    if(!res){
      throw new Error("El ticket no fue encontrado");
    }
    return res;
  }

  
  async create(data) {
    try {
      const{error,value} = pdmSchema.validate(data,{stripUnknown:true});
      if(error){
        throw new Error(`Error de validación:${error.details[0].message}`);
      }
      const pdm = await models.pdm.create(value);
      return pdm
    } catch (error) {
      console.error("Error al guardar",error.message);
      throw error;
    }
  }
  async update(id, data) {
    try {
      const{error,value}=pdmSchema.validate(data,{stripUnknown:true});
      if(error){
        throw new Error(`Error de validación:${error.details[0].message}`);
      }
      const pdm = await this.findOne(id);
      if(!pdm){
        throw new Error("No encontrado");
      }
      await pdm.update(value);
      return pdm
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
      const pdm = await this.findOne(id);
       if(!pdm){
         throw new Error("No encontrado")
       }
      await pdm.destroy();
      return {success:true,message:"Eliminado correctamente"}
    } catch (error) {
      throw error;
    }
  }
}
module.exports = pdmServices;
