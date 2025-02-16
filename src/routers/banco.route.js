const express=require('express');
const route = express.Router();
const bancoController = require('../controllers/bancoController');
const {validateRequest} = require("../middleware/validateRequest");
const {bancoSchema } = require("../schema/banco.schema");
const { authenticateToken, authorizeRoles } = require("../middleware/auth");
route
    .get('/',authenticateToken,authorizeRoles(["administrador","Empleado"]),bancoController.get)
    .get('/:id',authenticateToken,authorizeRoles(["administrador","Empleado"]),bancoController.getById)
    .post('/',authenticateToken,authorizeRoles(["administrador","Empleado"]),validateRequest(bancoSchema),bancoController.create)
    .put('/:id',authenticateToken,authorizeRoles(["administrador"]),validateRequest(bancoSchema),bancoController.update)
    .delete('/:id',authenticateToken,authorizeRoles(["administrador"]),validateRequest(bancoSchema),bancoController._delete);

module.exports=route;