const express=require('express');
const route = express.Router();
const pdmController = require('../controllers/pdmController');
const{validateRequest}=require("../middleware/validateRequest");
const{pdmSchema}=require("../schema/pdm.schema");
const { authenticateToken, authorizeRoles } = require("../middleware/auth");



route
    .get('/',authenticateToken,authorizeRoles(["administrador","Empleado"]),pdmController.get)
    .get('/:id',authenticateToken,authorizeRoles(["administrador","Empleado"]),pdmController.getById)
    .post('/',authenticateToken,authorizeRoles(["administrador"]),validateRequest(pdmSchema),pdmController.create)
    .put('/:id',authenticateToken,authorizeRoles(["administrador"]),validateRequest(pdmSchema),pdmController.update)
    .delete('/:id',authenticateToken,authorizeRoles(["administrador"]),validateRequest(pdmSchema),pdmController._delete);

module.exports=route;