const express=require('express');
const route = express.Router();
const phmController = require('../controllers/phmController');
const{validateRequest}=require("../middleware/validateRequest");
const{phmSchema}=require("../schema/phm.schema");
const { authenticateToken, authorizeRoles } = require("../middleware/auth");


route
    .get('/',authenticateToken,authorizeRoles(["administrador","Empleado"]),phmController.get)
    .get('/:id',authenticateToken,authorizeRoles(["administrador","Empleado"]),phmController.getById)
    .post('/',authenticateToken,authorizeRoles(["administrador"]),validateRequest(phmSchema),phmController.create)
    .put('/:id',authenticateToken,authorizeRoles(["administrador"]),validateRequest(phmSchema),phmController.update)
    .delete('/:id',authenticateToken,authorizeRoles(["administrador"]),validateRequest(phmSchema),phmController._delete);

module.exports=route;