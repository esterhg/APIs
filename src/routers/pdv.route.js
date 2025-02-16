const express=require('express');
const route = express.Router();
const pdvController = require('../controllers/pdvController');
const{validateRequest}=require("../middleware/validateRequest");
const{pdvSchema}=require("../schema/pdv.schema");
const { authenticateToken, authorizeRoles } = require("../middleware/auth");


route
    .get('/',authenticateToken,authorizeRoles(["administrador","Empleado"]),pdvController.get)
    .get('/:id',authenticateToken,authorizeRoles(["administrador","Empleado"]),pdvController.getById)
    .post('/',authenticateToken,authorizeRoles(["administrador"]),validateRequest(pdvSchema),pdvController.create)
    .put('/:id',authenticateToken,authorizeRoles(["administrador"]),validateRequest(pdvSchema),pdvController.update)
    .delete('/:id',authenticateToken,authorizeRoles(["administrador"]),validateRequest(pdvSchema),pdvController._delete);

module.exports=route;