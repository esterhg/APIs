const express=require('express');
const route = express.Router();
const tipo_servicioController = require('../controllers/tipo_servicioController');
const {validateRequest}=require("../middleware/validateRequest");
const{tipo_servicioSchema }=require("../schema/tipo_servicio.schema")
const { authenticateToken, authorizeRoles } = require("../middleware/auth");
route
    .get('/',authenticateToken,authorizeRoles(["administrador","Empleado"]),tipo_servicioController.get)
    .get('/:id',authenticateToken,authorizeRoles(["administrador","Empleado"]),tipo_servicioController.getById)
    .post('/',authenticateToken,authorizeRoles(["administrador"]),validateRequest(tipo_servicioSchema),tipo_servicioController.create)
    .put('/:id',authenticateToken,authorizeRoles(["administrador"]),validateRequest(tipo_servicioSchema),tipo_servicioController.update)
    .delete('/:id',authenticateToken,authorizeRoles(["administrador"]),tipo_servicioController._delete);

module.exports=route;