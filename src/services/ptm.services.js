const { models } = require("../libs/sequelize");
const{ptmSchema}=require("../schema/ptm.schema");
class ptmServices {
  constructor() {}

  async find() {
    const res = await models.ptm.findAll();
    if(!res){
      throw new Error("No se encontraron datos");
    }
    return res;
  }
  async findOne(id_Ticket) {
    const res = await models.ptm.findByPk(id_Ticket);
    if(!res){
      throw new Error("El ticket no fue encontrado");
    }
    return res;
  }

  async create(data) {
    try {
      const{error,value} = ptmSchema.validate(data,{stripUnknown:true});
      if(error){
        throw new Error(`Error de validación:${error.details[0].message}`);
      }
      const ptm = await models.ptm.create(value);
      return ptm
    } catch (error) {
      console.error("Error al guardar",error.message);
      throw error;
    }
  }
  async update(id, data) {
    try {
      const{error,value}=ptmSchema.validate(data,{stripUnknown:true});
      if(error){
        throw new Error(`Error de validación:${error.details[0].message}`);
      }
      const ptm = await this.findOne(id);
      if(!ptm){
        throw new Error("No encontrado");
      }
      await ptm.update(value);
      return ptm
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
      const ptm = await this.findOne(id);
       if(!ptm){
         throw new Error("No encontrado")
       }
      await ptm.destroy();
      return {success:true,message:"Eliminado correctamente"}
    } catch (error) {
      throw error;
    }
  }
}
module.exports = ptmServices;
