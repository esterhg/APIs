const bcrypt = require("bcrypt");
const { models } = require("../libs/sequelize");
const { UsuarioSchema } = require("../schema/usuarios.schema");

class usuariosServices {
  constructor() {}

  async find() {
    const res = await models.usuarios.findAll();
    return res;
  }
  async findOne(id_Usuario) {
    const res = await models.usuarios.findByPk(id_Usuario);
    return res;
  }

  async create(data) {
    try {
      const { error, value } = UsuarioSchema.validate(data, {
        stripUnknown: true,
      });
      if (error) {
        throw new Error(`Error de validación: ${error.details[0].message}`);
      }
      const salt = await bcrypt.genSalt(10);
      value.contrasena = await bcrypt.hash(value.contrasena, salt);

      const Usuario = await models.usuarios.create(value);
      console.log("Nuevo usuario creado:", Usuario);

      if (data.id_Rol) {
        const newRolUsuario = await models.rol_usuario.create({
          id_Usuario: Usuario.id_Usuario,
          id_Rol: data.id_Rol,
        });
        console.log("Relación rol_usuario creada:", newRolUsuario);
      } else {
        console.log("No se proporcionó id_Rol.");
      }

      return Usuario;
    } catch (error) {
      console.error("Error al crear usuario:", error.message);
      throw error;
    }
  }

  async update(id, data) {
    try {
      const { error, value } = UsuarioSchema.validate(data, {
        stripUnknown: true,
      });
      if (error) {
        throw new Error(`Error de validación: ${error.details[0].message}`);
      }
      const Usuario = await this.findOne(id);
      if (!Usuario) {
        throw new Error("Usuario no encontrado");
      }
      await Usuario.update(value);
      console.log("Usuario actualizado:", Usuario);
      if (data.id_Rol) {
        const rolUsuario = await models.rol_usuario.findOne({
          where: { id_Usuario: id },
        });

        if (rolUsuario) {
          await rolUsuario.update({ id_Rol: data.id_Rol });
          console.log("Relación rol_usuario actualizada:", rolUsuario);
        } else {

          const newRolUsuario = await models.rol_usuario.create({
            id_Usuario: id,
            id_Rol: data.id_Rol,
          });
          console.log("Nueva relación rol_usuario creada:", newRolUsuario);
        }
      }

      return Usuario;
    } catch (error) {
      throw error;
    }
  }
  async delete(id) {
    try {
      if (!id || isNaN(id)) {
        throw new Error("ID inválido");
      }
      const usuario = await this.findOne(id);
      if (!usuario) {
        throw new Error("Usuario no encontrado");
      }
      await models.rol_usuario.destroy({
        where: { id_Usuario: id },
      });
      await usuario.destroy();
      return { success: true, message: "Usuario eliminado correctamente" };
    } catch (error) {
      console.error("Error al eliminar usuario:", error.message);
      throw error;
    }
  }
}
module.exports = usuariosServices;
