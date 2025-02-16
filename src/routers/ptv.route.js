const express=require('express');
const route = express.Router();
const ptvController = require('../controllers/ptvController');
const{validateRequest}=require("../middleware/validateRequest");
const {ptvSchema}=require("../schema/ptv.schema");
const { authenticateToken, authorizeRoles } = require("../middleware/auth");
route
    .get('/',authenticateToken,authorizeRoles(["administrador","Empleado"]),ptvController.get)
    .get('/:id',authenticateToken,authorizeRoles(["administrador","Empleado"]),ptvController.getById)
    .post('/',authenticateToken,authorizeRoles(["administrador"]),validateRequest(ptvSchema),ptvController.create)
    .put('/:id',authenticateToken,authorizeRoles(["administrador"]),validateRequest(ptvSchema),ptvController.update)
    .delete('/:id',authenticateToken,authorizeRoles(["administrador"]),validateRequest(ptvSchema),ptvController._delete);

module.exports=route;