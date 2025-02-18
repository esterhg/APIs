const { models } = require("../libs/sequelize");
const{facturaSchema}=require("../schema/factura.schema");
class facturaServices {
  constructor() {}

  async find() {
    const res = await models.factura.findAll();
    if(!res){
      throw new Error("No se encontraron facturas");
    }
    return res;
  }
  async findOne(id_Nofactura) {
    const res = await models.factura.findByPk(id_Nofactura);
    if(!res){
      throw new Error("Factura no encontrada");
    }
    return res;
  }

  
  async create(data) {
    try {
      const{error,value} = facturaSchema.validate(data,{stripUnknown:true});
      if(error){
        throw new Error(`Error de validación:${error.details[0].message}`);
      }
      const factura = await models.factura.create(value);
      return factura
    } catch (error) {
      console.error("Error al guardar",error.message);
      throw error;
    }
  }
  async update(id, data) {
    try {
      const{error,value}=facturaSchema.validate(data,{stripUnknown:true});
      if(error){
        throw new Error(`Error de validación:${error.details[0].message}`);
      }
      const factura = await this.findOne(id);
      if(!factura){
        throw new Error("No encontrado");
      }
      await factura.update(value);
      return factura
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
      const factura = await this.findOne(id);
       if(!factura){
         throw new Error("No encontrado")
       }
      await factura.destroy();
      return {success:true,message:"Eliminado correctamente"}
    } catch (error) {
      throw error;
    }
  }
}
module.exports = facturaServices;
