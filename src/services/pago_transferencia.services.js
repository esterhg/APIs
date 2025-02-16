const { models } = require("../libs/sequelize");
const {pagoTransferenciaSchema} = require("../schema/pago_transferencia.schema");
class pago_transferenciaServices {
  constructor() {}

  async find() {
    const res = await models.pago_transferencia.findAll();
    return res;
  }
  async findOne(id_PagoTrasferencia) {
    const res = await models.pago_transferencia.findByPk(id_PagoTrasferencia);
    return res;
  }
  async create(data) {
    try {
      const { error, value } = pagoTransferenciaSchema.validate(data, { stripUnKnown: true });
      if (error) {
        throw new Error(`Error de validación: ${error.details[0].message}`);
      }
      const pago_transferencia = await models.pago_transferencia.create(value);
      return pago_transferencia;
    } catch (error) {
      console.error("Error al crear ", error.message);
    }

  }
  async update(id, data) {

    try{
      const { error, value } = pagoTransferenciaSchema.validate(data, { stripUnKnown: true });
      if (error) {
        throw new Error(`Error de validación: ${error.details[0].message}`);
      }

      const pago_transferencia = await this.findOne(id);
      if(!pago_transferencia){
        throw new Error("tipo vehiculo no encontrado");

      }
      await pago_transferencia.update(value);

      return pago_transferencia;
    }catch(error){
      throw error;
    }
    
  }
  async delete(id) {
    try {
      if(!id|| isNaN(id)){
        throw new Error("IDinválido ")
      }
      const pago_transferencia = await this.findOne(id);
      if(!pago_transferencia){
        throw new Error("tipo vehiculo no encontrado");

      }
      await pago_transferencia.destroy();
      return {success:true,message:"Tipo vehiculo eliminado correctamente"}
    } catch (error) {
      throw error;
    }
    
   
  }
}
module.exports = pago_transferenciaServices;
