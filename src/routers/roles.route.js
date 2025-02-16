const express=require('express');
const route = express.Router();
const rolesController = require('../controllers/rolesController');
const {validateRequest}=require("../middleware/validateRequest");
const { rolesSchema } = require("../schema/roles.schema");
const { authenticateToken, authorizeRoles } = require("../middleware/auth");
route
    .get('/',authenticateToken,authorizeRoles(["administrador","Empleado"]),rolesController.get)
    .get('/:id',authenticateToken,authorizeRoles(["administrador","Empleado"]),rolesController.getById)
    .post('/',authenticateToken,authorizeRoles(["administrador"]),validateRequest(rolesSchema),rolesController.create)
    .put('/:id',authenticateToken,authorizeRoles(["administrador"]),validateRequest(rolesSchema),rolesController.update)
    .delete('/:id',authenticateToken,authorizeRoles(["administrador"]),rolesController._delete);

module.exports=route;