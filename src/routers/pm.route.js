const express=require('express');
const route = express.Router();
const pmController = require('../controllers/pmController');
const{validateRequest}=require("../middleware/validateRequest");
const{pmSchema}=require("../schema/pm.schema");
const { authenticateToken, authorizeRoles } = require("../middleware/auth");


route
    .get('/',authenticateToken,authorizeRoles(["administrador","Empleado"]),pmController.get)
    .get('/:id',authenticateToken,authorizeRoles(["administrador","Empleado"]),pmController.getById)
    .post('/',authenticateToken,authorizeRoles(["administrador"]),validateRequest(pmSchema),pmController.create)
    .put('/:id',authenticateToken,authorizeRoles(["administrador"]),validateRequest(pmSchema),pmController.update)
    .delete('/:id',authenticateToken,authorizeRoles(["administrador"]),validateRequest(pmSchema),pmController._delete);

module.exports=route;