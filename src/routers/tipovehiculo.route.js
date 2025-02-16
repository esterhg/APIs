const express=require('express');
const route = express.Router();
const tipovehiculoController = require('../controllers/tipovehiculoController');
const { validateRequest } = require('../middleware/validateRequest');
const{tipovehiculoSchema}=require('../schema/tipovehiculo.schema')
const { authenticateToken, authorizeRoles } = require("../middleware/auth");
route
    .get('/',authenticateToken,authorizeRoles(["administrador","Empleado"]),tipovehiculoController.get)
    .get('/:id',authenticateToken,authorizeRoles(["administrador","Empleado"]),tipovehiculoController.getById)
    .post('/',authenticateToken,authorizeRoles(["administrador"]),validateRequest(tipovehiculoSchema),tipovehiculoController.create)
    .put('/:id',authenticateToken,authorizeRoles(["administrador"]),validateRequest(tipovehiculoSchema),tipovehiculoController.update)
    .delete('/:id',authenticateToken,authorizeRoles(["administrador"]),tipovehiculoController._delete);

module.exports=route;