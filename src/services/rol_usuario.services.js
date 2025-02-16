const { models } = require("../libs/sequelize");
const { rol_usuarioSchema}= require("../schema/rol_usuario.schema");

class rol_usuarioServices {
  constructor() {}

  async find() {
    const res = await models.rol_usuario.findAll();
    return res;
  }
  async findOne(id_rol_usuario) {
    const res = await models.rol_usuario.findByPk(id_rol_usuario);
    return res;
  }

  async create(data) {
    try {
      const{error,value}=rol_usuarioSchema.validate(data,{stripUnknown:true});
      if(error){
        throw new Error(`Error de validación:${error.details[0].message}`);
      }
      const rol_usuario = await models.rol_usuario.create(value);
      return rol_usuario
    } catch (error) {
      console.error("Error al guardar rol usuario", error.message);
      throw error;
      
    }
  }
  async update(id, data) {
    try {
       const{error,value}= rol_usuarioSchema.validate(data,{stripUnknown:true});
       if(error){
        throw new Error(`Error de validación: ${error.details[0].message}`);
       }
       const rol_usuario = await this.findOne(id);
       if(!rol_usuario){
         throw new Error("Tipo rol no encontrado")
       }
       await rol_usuario.update(value);
       return rol_usuario
    } catch (error) {
      console.error("Error al actualizar rol usuario");
      throw error;
    }
  
  }
  async delete(id) {
    try {
      if(!id|| isNaN(id)){
        throw new Error("ID Inválido ")
      }
      const rol_usuario = await this.findOne(id);
       if(!rol_usuario){
         throw new Error("Tipo rol no encontrado")
       }
      await rol_usuario.destroy();
      return {success:true,message:"Tipo rol eliminado correctamente"}
    } catch (error) {
      throw error;
    }
  }
}
module.exports = rol_usuarioServices;
