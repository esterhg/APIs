const { models } = require("../libs/sequelize");
const{datosmSchema}=require("../schema/datosm.schema");
class datosmServices {
  constructor() {}

  async find() {
    const res = await models.datosm.findAll();
    if(!res){
      throw new Error("No se encontraron datos");
    }
    return res;
  }
  async findOne(id_Datos) {
    const res = await models.datosm.findByPk(id_Datos);
    if(!res){
      throw new Error("No se encontro");
    }
    return res;
  }

  
  async create(data) {
    try {
      const{error,value} = datosmSchema.validate(data,{stripUnknown:true});
      if(error){
        throw new Error(`Error de validación:${error.details[0].message}`);
      }
      const datosm = await models.datosm.create(value);
      return datosm
    } catch (error) {
      console.error("Error al guardar",error.message);
      throw error;
    }
  }
  async update(id, data) {
    try {
      const{error,value}=datosmSchema.validate(data,{stripUnknown:true});
      if(error){
        throw new Error(`Error de validación:${error.details[0].message}`);
      }
      const datosm = await this.findOne(id);
      if(!datosm){
        throw new Error("No encontrado");
      }
      await datosm.update(value);
      return datosm
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
      const datosm = await this.findOne(id);
       if(!datosm){
         throw new Error("No encontrado")
       }
      await datosm.destroy();
      return {success:true,message:"Eliminado correctamente"}
    } catch (error) {
      throw error;
    }
  }
}
module.exports = datosmServices;
