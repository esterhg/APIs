const { models } = require("../libs/sequelize");
const{tipopagofacturaSchema,}=require("../schema/tipopagofactura.schema");
class tipopagofacturaServices {
  constructor() {}

  async find() {
    const res = await models.tipopagofactura.findAll();
    if(!res){
      throw new Error("No se encontro tipo pago factura")
    }
    return res;
  }
  async findOne(id_TipoPago) {
    const res = await models.tipopagofactura.findByPk(id_TipoPago);
    if(!res){
      throw new Error("Tipo pago factura, no enontrado")
    }
    return res;
  }

  async create(data) {
    try{
      const{error,value}=tipopagofacturaSchema.validate(data,{stripUnknown:true});
      if(error){
        throw new Error(`Error de validacción: ${error.details[0].message}`);
      }
      const tipopagofactura = await models.tipopagofactura.create(value);
      return tipopagofactura
    }catch(error){
      console.error("Error al crear usuario:", error.message);
      throw error;
    }

  }
  async update(id, data) {
    try{
      const{error,value}= tipopagofacturaSchema.validate(data,{stripUnknown:true});
    if(error){
      throw new Error(`Error de validación: ${error.details[0].message}`);
    }
    const tipopagofactura = await this.findOne(id);
    if(!tipopagofactura){
      throw new Error("Tipo pago factura, no enontrado")
    }
     await tipopagofactura.update(value);
    return tipopagofactura;
  
    }catch(error){
      
      console.error("Error al actualizar tipo vehiculo", error.message);
      throw error;
    }
    }
    async delete(id) {
      try {
        if(!id|| isNaN(id)){
          throw new Error("ID Inválido ")
        }
        const tipopagofactura = await this.findOne(id);
        if(!tipopagofactura){
          throw new Error("Tipo pago factura, no enontrado")
        }
        await tipopagofactura.destroy();
        return {success:true,message:"Tipo pago factura eliminado correctamente"}
      } catch (error) {
        throw error;
      }
    }
}
module.exports = tipopagofacturaServices;
