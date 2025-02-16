const { models } = require("../libs/sequelize");
const { tipopagoSchema } = require("../schema/tipopago.schema");


class tipopagoServices {
  constructor() { }

  async find() {
    const res = await models.tipopago.findAll();
    return res;
  }
  async findOne(id_Pago) {
    const res = await models.tipopago.findByPk(id_Pago);
    return res;
  }

  async create(data) {
    try {

      const { error, value } = tipopagoSchema.validate(data, { stripUnknown: true });
      if (error) {
        throw new Error(`Error de validacción: ${error.details[0].message}`);
      }
      const tipopago = await models.tipopago.create(value);
      return tipopago
    } catch (error) {
      console.error("Error al crear tipo pago:", error.message);
      throw error;
    }

  }
  async update(id, data) {
    try {
      const{error,value}=tipopagoSchema.validate(data,{stripUnknown:true});

      if(error){
        throw new Error(`Error de validación:${error.details[0].message}`);

      }
      const tipopago = await this.findOne(id);

      if(!tipopago){
        throw new Error("Tipo pago no encontrado")
      }
      await tipopago.update(value);
      return tipopago;
      
    } catch (error) {
      console.error("Error al actualizar tipo pago:", error.message);
      throw error;
    }
  }
  async delete(id) {
    try {
      if(!id|| isNaN(id)){
        throw new Error("IDinválido ")
      }
      const tipopago = await this.findOne(id);

      if(!tipopago){
        throw new Error("Tipo pago no encontrado")
      }
      await tipopago.destroy();
      return {success:true,message:"Tipo pago eliminado correctamente"}
    } catch (error) {
      throw error;
    }
  }
}
module.exports = tipopagoServices;
