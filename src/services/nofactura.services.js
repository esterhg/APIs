const { models } = require("../libs/sequelize");
const{nofacturaSchema}=require("../schema/nofactura.schema");
class nofacturaServices {
  constructor() {}

  async find() {
    const res = await models.nofactura.findAll();
    if(!res){
      throw new Error("No se encontraron facturas");
    }
    return res;
  }
  async findOne(id_Factura) {
    const res = await models.nofactura.findByPk(id_Factura);
    if(!res){
      throw new Error("No se encontró factura");
    }
    return res;
  }

  async create(data) {
    try {
      const{error,value} = nofacturaSchema.validate(data,{stripUnknown:true});
      if(error){
        throw new Error(`Error de validación:${error.details[0].message}`);
      }
      const nofactura = await models.nofactura.create(value);
      return nofactura
    } catch (error) {
      console.error("Error al guardar",error.message);
      throw error;
    }
  }
  async update(id, data) {
    try {
      const{error,value}=nofacturaSchema.validate(data,{stripUnknown:true});
      if(error){
        throw new Error(`Error de validación:${error.details[0].message}`);
      }
      const nofactura = await this.findOne(id);
      if(!nofactura){
        throw new Error("No encontrado");
      }
      await nofactura.update(value);
      return nofactura
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
      const nofactura = await this.findOne(id);
       if(!nofactura){
         throw new Error("No encontrado")
       }
      await nofactura.destroy();
      return {success:true,message:"Eliminado correctamente"}
    } catch (error) {
      throw error;
    }
  }
}
module.exports = nofacturaServices;
