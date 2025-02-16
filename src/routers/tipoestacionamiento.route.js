const express=require('express');
const route = express.Router();
const tipoestacionamientoController = require('../controllers/tipoestacionamientoController');
const {validateRequest}= require('../middleware/validateRequest');
const{tipoestacionamientoSchema}=require("../schema/tipoestacionamiento.schema");
const { authenticateToken, authorizeRoles } = require("../middleware/auth");
route
    .get('/',authenticateToken,authorizeRoles(["administrador","Empleado"]),tipoestacionamientoController.get)
    .get('/:id',authenticateToken,authorizeRoles(["administrador","Empleado"]),tipoestacionamientoController.getById)
    .post('/',authenticateToken,authorizeRoles(["administrador"]),validateRequest(tipoestacionamientoSchema),tipoestacionamientoController.create)
    .put('/:id',authenticateToken,authorizeRoles(["administrador"]),validateRequest(tipoestacionamientoSchema),tipoestacionamientoController.update)
    .delete('/:id',authenticateToken,authorizeRoles(["administrador"]),tipoestacionamientoController._delete);

module.exports=route;