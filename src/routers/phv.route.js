const express=require('express');
const route = express.Router();
const phvController = require('../controllers/phvController');
const{validateRequest}=require("../middleware/validateRequest");
const{phvSchema}=require("../schema/phv.schema");
const { authenticateToken, authorizeRoles } = require("../middleware/auth");


route
    .get('/',authenticateToken,authorizeRoles(["administrador","Empleado"]),phvController.get)
    .get('/:id',authenticateToken,authorizeRoles(["administrador","Empleado"]),phvController.getById)
    .post('/',authenticateToken,authorizeRoles(["administrador"]),validateRequest(phvSchema),phvController.create)
    .put('/:id',authenticateToken,authorizeRoles(["administrador"]),validateRequest(phvSchema),phvController.update)
    .delete('/:id',authenticateToken,authorizeRoles(["administrador"]),validateRequest(phvSchema),phvController._delete);

module.exports=route;