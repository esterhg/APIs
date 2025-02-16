const express=require('express');
const route = express.Router();
const estadofacturaController = require('../controllers/estadofacturaController');
const{validateRequest}=require("../middleware/validateRequest");
const{estadofacturaSchema}=require("../schema/estadofactura.schema");
const { authenticateToken, authorizeRoles } = require("../middleware/auth");


route
    .get('/',authenticateToken,authorizeRoles(["administrador","Empleado"]),estadofacturaController.get)
    .get('/:id',authenticateToken,authorizeRoles(["administrador","Empleado"]),estadofacturaController.getById)
    .post('/',authenticateToken,authorizeRoles(["administrador"]),validateRequest(estadofacturaSchema),estadofacturaController.create)
    .put('/:id',authenticateToken,authorizeRoles(["administrador"]),validateRequest(estadofacturaSchema),estadofacturaController.update)
    .delete('/:id',authenticateToken,authorizeRoles(["administrador"]),validateRequest(estadofacturaSchema),estadofacturaController._delete);

module.exports=route;