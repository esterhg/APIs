const { models } = require("../libs/sequelize");
const{datosfacturacionSchema}=require("../schema/datosfacturacion.schema");
class datosfacturacionServices {
  constructor() {}

  async find() {
    const res = await models.datosfacturacion.findAll();
    if(!res){
      throw new Error("No se encontraron datos de facturas");
    }
    return res;
  }
  async findOne(id_datosFactura) {
    const res = await models.datosfacturacion.findByPk(id_datosFactura);
    if(!res){
      throw new Error("No se encontro datos de factura");
    }
    return res;
  }
  async findRTN(RTN) {
    const res = await models.datosfacturacion.findAll({
      where: {RTN},
    });
    return res;
  }

  async create(data) {
    try {
      const{error,value} = datosfacturacionSchema.validate(data,{stripUnknown:true});
      if(error){
        throw new Error(`Error de validación:${error.details[0].message}`);
      }
      const datosfacturacion = await models.datosfacturacion.create(value);
      return datosfacturacion
    } catch (error) {
      console.error("Error al guardar",error.message);
      throw error;
    }
  }
  async update(id, data) {
    try {
      const{error,value}=datosfacturacionSchema.validate(data,{stripUnknown:true});
      if(error){
        throw new Error(`Error de validación:${error.details[0].message}`);
      }
      const datosfacturacion = await this.findOne(id);
      if(!datosfacturacion){
        throw new Error("No encontrado");
      }
      await datosfacturacion.update(value);
      return datosfacturacion
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
      const datosfacturacion = await this.findOne(id);
       if(!datosfacturacion){
         throw new Error("No encontrado")
       }
      await datosfacturacion.destroy();
      return {success:true,message:"Eliminado correctamente"}
    } catch (error) {
      throw error;
    }
  }
}
module.exports = datosfacturacionServices;
