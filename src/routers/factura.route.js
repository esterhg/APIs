const express=require('express');
const route = express.Router();
const facturaController = require('../controllers/facturaController');
const{validateRequest}=require("../middleware/validateRequest");
const{facturaSchema}=require("../schema/factura.schema");
const { authenticateToken, authorizeRoles } = require("../middleware/auth");


route
    .get('/',authenticateToken,authorizeRoles(["administrador","Empleado"]),facturaController.get)
    .get('/:id',authenticateToken,authorizeRoles(["administrador","Empleado"]),facturaController.getById)
    .post('/',authenticateToken,authorizeRoles(["administrador"]),validateRequest(facturaSchema),facturaController.create)
    .put('/:id',authenticateToken,authorizeRoles(["administrador"]),validateRequest(facturaSchema),facturaController.update)
    .delete('/:id',authenticateToken,authorizeRoles(["administrador"]),validateRequest(facturaSchema),facturaController._delete);

module.exports=route;