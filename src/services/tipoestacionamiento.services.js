const { required } = require("joi");
const { models } = require("../libs/sequelize");
const { tipoestacionamientoSchema } = require("../schema/tipoestacionamiento.schema")

class tipoestacionamientoServices {
  constructor() { }

  async find() {
    const res = await models.tipoestacionamiento.findAll();
    return res;
  }
  async findOne(id_Estacionamiento) {
    const res = await models.tipoestacionamiento.findByPk(id_Estacionamiento);
    return res;
  }

  async create(data) {
    try {
      const { error, value } = tipoestacionamientoSchema.validate(data, { stripUnknown: true });
      if (error) {
        throw new Error(`Error de validacion: ${error.details[0].message}`);
      }
      const tipoestacionamiento = await models.tipoestacionamiento.create(value);
      return tipoestacionamiento
    } catch (error) {
      console.error("Error al crear:", error.message);
      throw error;
    }

  }
  async update(id, data) {
    try {
      const { error, value } = tipoestacionamientoSchema.validate(data, { stripUnknown: true });
      if (error) {
        throw new Error(`Error de validación: ${error.details[0].message}`);
      }
      const tipoestacionamiento = await this.findOne(id);
      if (!tipoestacionamiento) {
        throw new Error ("Tipo  tipoestacionamiento no encontrado")
      }

      await tipoestacionamiento.update(value);
      return tipoestacionamiento
    } catch (error) {
      console.error("Error al actualizar tipo estacionamiento:", error.message);
      throw error;
    }

  }
  async delete(id) {
    try {
      if(!id|| isNaN(id)){
        throw new Error("IDinválido ")
      }
      const tipoestacionamiento = await this.findOne(id);
      if (!tipoestacionamiento) {
        throw new Error ("Tipo  tipoestacionamiento no encontrado")
      }
      await tipoestacionamiento.destroy();
      return {success:true,message:"Tipo estacionamiento eliminado correctamente"}
    } catch (error) {
      throw error;
    }
  }
}
module.exports = tipoestacionamientoServices;
