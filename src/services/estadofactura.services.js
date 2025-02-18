const { models } = require("../libs/sequelize");
const{estadofacturaSchema}=require("../schema/estadofactura.schema");
class estadofacturaServices {
  constructor() {}

  async find() {
    const res = await models.estadofactura.findAll();
    if(!res){
      throw new Error("No se encontraron datos");
    }
    return res;
  }
  async findOne(id_EstadoFactura) {
    const res = await models.estadofactura.findByPk(id_EstadoFactura);
    if(!res){
      throw new Error("Estado de factura no fue encontrado");
    }
    return res;
  }

  async create(data) {
    try {
      const{error,value} = estadofacturaSchema.validate(data,{stripUnknown:true});
      if(error){
        throw new Error(`Error de validación:${error.details[0].message}`);
      }
      const estadofactura = await models.estadofactura.create(value);
      return estadofactura
    } catch (error) {
      console.error("Error al guardar el estado de la factura",error.message);
      throw error;
    }
  }
  async update(id, data) {
    try {
      const{error,value}=estadofacturaSchema.validate(data,{stripUnknown:true});
      if(error){
        throw new Error(`Error de validación:${error.details[0].message}`);
      }
      const estadofactura = await this.findOne(id);
      if(!estadofactura){
        throw new Error("No se encontrado el estado de la factura");
      }
      await estadofactura.update(value);
      return estadofactura
    } catch (error) {
      console.error("Error al actualizar el estado de la factura");
      throw error;
    }
  }
   async delete(id) {
    try {
      if(!id|| isNaN(id)){
        throw new Error("ID Inválido ")
      }
      const estadofactura = await this.findOne(id);
       if(!estadofactura){
         throw new Error("No se encontrado el estado de la factura")
       }
      await estadofactura.destroy();
      return {success:true,message:"Eliminado correctamente"}
    } catch (error) {
      throw error;
    }
  }
}
module.exports = estadofacturaServices;
