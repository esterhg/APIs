const jws = require('jws');
const SECRET_KEY = process.env.SECRET_KEY;

const authenticateToken = (req, res, next) => {
  const authHeader = req.headers["authorization"];
  if (!authHeader) {
    return res.status(401).json({ message: "Acceso denegado, token requerido" });
  }
  const token = authHeader.split(" ")[1];

  const decoded = jws.decode(token);

  if (!jws.verify(token, "HS256", SECRET_KEY)) {
    return res.status(403).json({ message: "Token inválido o expirado" });
  }
  try {
    req.usuario = JSON.parse(decoded.payload);
  } catch (error) {
    return res.status(400).json({ message: "Error al decodificar token" });
  }
  next();
};

const authorizeRoles = (allowedRoles = []) => {
  return (req, res, next) => {
    if (!req.usuario || !req.usuario.roles) {
      return res.status(401).json({ message: "Acceso denegado: sin roles asignados" });
    }

    const userRoles = req.usuario.roles;
    const isAuthorized = allowedRoles.some((role) =>
      userRoles.some(userRole => userRole.toLowerCase() === role.toLowerCase())
    );

    if (!isAuthorized) {
      return res.status(401).json({ message: "Acceso denegado, no cuentas con los permisos requeridos" });
    }
    next();
  };
};


module.exports = { authenticateToken, authorizeRoles };