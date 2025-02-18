const { models } = require("../libs/sequelize");
const { rolesSchema } = require("../schema/roles.schema");

class rolesServices {
  constructor() {}

  async find() {
    const res = await models.roles.findAll();
    if(!res){
      throw new Error("No se encontraron roles")
    }
    return res;
  }
  async findOne(id_Rol) {
    const res = await models.roles.findByPk(id_Rol);
    if(!res){
      throw new Error("Rol no encontrado")
    }
    return res;
  }

  async create(data) {
    try {
      const{error,value}= rolesSchema.validate(data,{stripUnknown:true});
      if(error){
        throw new Error(`Error de validación: ${error.details[0].message}`);
      }
      const roles= await models.roles.create(value);
      return roles
      
    } catch (error) {
      console.error("Error al crear Roles",error.message);
      throw error;
    }
  }
  async update(id, data) {
    try {
      const{error,value}=rolesSchema.validate(data,{stripUnknown:true});
      if(error){
        throw new Error(`Error de validación:${error.details[0].message}`);
      }
      const roles= await this.findOne(id);
      if(!roles){
        throw new Error("Rol no encontrado");
      }
      await roles.update(value);
      return roles
    } catch (error) {
      console.error("Error al actualizar Roles");
      throw error; 
    }
  }
  async delete(id) {
    try {
      if(!id|| isNaN(id)){
        throw new Error("ID Inválido ")
      }
      const roles= await this.findOne(id);
      if(!roles){
        throw new Error("Rol no encontrado");
      }
      await roles.destroy();
      return {success:true,message:"Rol eliminado correctamente"}
    } catch (error) {
      throw error;
    }
  }
}
module.exports = rolesServices;
