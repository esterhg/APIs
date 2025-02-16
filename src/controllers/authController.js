const jws = require("jws");
const bcrypt = require("bcryptjs");
const { models } = require("../libs/sequelize");
const SECRET_KEY = process.env.SECRET_KEY;

const login = async (req, res) => {
  try {
    const { nombre, contrasena } = req.body;
    const usuario = await models.usuarios.findOne({
      where: { nombre },
      include: {
        model: models.rol_usuario,
        include: { model: models.roles, attributes: ["nombre_Rol"] }
      }
    });

    if (!usuario) {
      return res.status(404).json({ message: "Usuario no encontrado" });
    }

    // Verificar la contraseña con bcrypt 
    const validPassword = await bcrypt.compare(contrasena, usuario.contrasena);
    if (!validPassword) {
      return res.status(401).json({ message: "Contraseña incorrecta" });
    }
    const payload = {
      id_Usuario: usuario.id_Usuario,
      nombre: usuario.nombre,
      roles: usuario.rol_usuarios.map((r) => r.role.nombre_Rol)
    };
    const token = jws.sign({
      header: { alg: "HS256" },
      payload,
      secret: SECRET_KEY
    });

    res.json({ token });
  } catch (error) {
    console.error("Error en el login:", error.message);
    res.status(500).json({ message: error.message });
  }
};

module.exports = { login };
