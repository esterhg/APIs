const { models } = require("../libs/sequelize");
const {tipo_servicioSchema}=require("../schema/tipo_servicio.schema")
class tipo_servicioServices {
  constructor() {}

  async find() {
    const res = await models.tipo_servicio.findAll();
    if(!res){
      throw new Error("No se enontraron tipos de servicios")
    }
    return res;
  }
  async findOne(id_Servicio) {
    const res = await models.tipo_servicio.findByPk(id_Servicio);
    if(!res){
      throw new Error("Tipo servicio no encontrado")
    }
    return res;
  }

  async create(data) {
    try {
       const{error,value}=tipo_servicioSchema.validate(data,{stripUnknown:true});
       if(error){
        throw new Error(`Error de validación:${error.details[0].message}`);
       }
       const tipo_servicio = await models.tipo_servicio.create(value);
       return tipo_servicio
    } catch (error) {
      console.error("Error al crear tipo servicio ", error.message);
      throw error;
    }
 
  }
  
  async update(id, data) {
    try {
      const{error,value}=tipo_servicioSchema.validate(data,{stripUnknown:true});
      if(error){
        throw new Error(`Error de validacion:${error.details[0].message}`);
      }
      const tipo_servicio= await this.findOne(id);
      if(!tipo_servicio){
        throw new Error("Tipo de servicio no encontrado");
      }
      await tipo_servicio.update(value);
      return tipo_servicio
    } catch (error) {
      console.error("Error al actualizar tipo servicio", error.message);
      throw error;
    }
    
  }
  async delete(id) {
    try {
      if(!id|| isNaN(id)){
        throw new Error("ID Inválido")
      }
      const tipo_servicio= await this.findOne(id);
      if(!tipo_servicio){
        throw new Error("Tipo de servicio no encontrado");
      }
      await tipo_servicio.destroy();
      return {success:true,message:"Tipo de servicio eliminado correctamente"}
    } catch (error) {
      throw error;
    }
  }
}
module.exports = tipo_servicioServices;
