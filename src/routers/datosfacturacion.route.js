const express=require('express');
const route = express.Router();
const datosfacturacionController = require('../controllers/datosfacturacionController');
const {validateRequest}= require("../middleware/validateRequest");
const {datosfacturacionSchema}= require("../schema/datosfacturacion.schema");
const { authenticateToken, authorizeRoles } = require("../middleware/auth");


route
    .get('/', authenticateToken, authorizeRoles(["administrador","Empleado"]),datosfacturacionController.get)
    .get('/:id', authenticateToken, authorizeRoles(["administrador","Empleado"]),datosfacturacionController.getById)
    .post('/',validateRequest(datosfacturacionSchema),authenticateToken, authorizeRoles(["administrador","Empleado"]),datosfacturacionController.create)
    .put('/:id',validateRequest(datosfacturacionSchema),authenticateToken, authorizeRoles(["administrador"]),datosfacturacionController.update)
    .delete('/:id',authenticateToken, authorizeRoles(["administrador"]),datosfacturacionController._delete);

module.exports=route;