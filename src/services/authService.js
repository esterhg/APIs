const bcrypt = require('bcrypt');
const signToken = require('../middleware/signToken');
const { models } = require("../libs/sequelize");

class AuthService {
  constructor() {}

  async login(data) {
    try {
      const { nombre, contrasena } = data;
      console.log("Nombre recibido:", nombre);

      // Buscar usuario en la BD
      const usuario = await models.usuarios.findOne({ where: { nombre } });

      if (!usuario) {
        console.log(" Usuario no encontrado en la BD");
        throw new Error("Credenciales inválidas");
      }

      console.log(" Usuario encontrado:", usuario.dataValues);

      // Comparar contraseñas
      const passwordMatch = await bcrypt.compare(contrasena, usuario.contrasena);
      console.log("Resultado comparación contraseña:", passwordMatch);

      if (!passwordMatch) {
        console.log(" La contraseña no coincide");
        throw new Error("Credenciales inválidas");
      }

      // Generar token
      const token = signToken({ id: usuario.id_Usuario, nombre: usuario.nombre });

      return { success: true, token };

    } catch (error) {
      console.error(" Error en AuthService:", error.message);
      throw error;
    }
  }
}

module.exports = AuthService;
