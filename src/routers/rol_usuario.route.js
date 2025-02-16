const express=require('express');
const route = express.Router();
const rol_usuarioController = require('../controllers/rol_usuarioController');
const {validateRequest}=require("../middleware/validateRequest");
const {rol_usuarioSchema}=require("../schema/rol_usuario.schema");
const { authenticateToken, authorizeRoles } = require("../middleware/auth");
route
    .get('/',authenticateToken,authorizeRoles(["administrador","Empleado"]),rol_usuarioController.get)
    .get('/:id',authenticateToken,authorizeRoles(["administrador"]),rol_usuarioController.getById)
    .post('/',authenticateToken,authorizeRoles(["administrador"]),validateRequest(rol_usuarioSchema),rol_usuarioController.create)
    .put('/:id',authenticateToken,authorizeRoles(["administrador"]),validateRequest(rol_usuarioSchema),rol_usuarioController.update)
    .delete('/:id',authenticateToken,authorizeRoles(["administrador"]),rol_usuarioController._delete);

module.exports=route;