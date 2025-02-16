const express=require('express');
const route = express.Router();
const pago_transferenciaController = require('../controllers/pago_transferenciaController');
const {validateRequest} = require("../middleware/validateRequest");
const {pagoTransferenciaSchema}= require("../schema/pago_transferencia.schema");
const { authenticateToken, authorizeRoles } = require("../middleware/auth");


route
    .get('/',authenticateToken,authorizeRoles(["administrador","Empleado"]),pago_transferenciaController.get)
    .get('/:id',authenticateToken,authorizeRoles(["administrador","Empleado"]),pago_transferenciaController.getById)
    .post('/',authenticateToken,authorizeRoles(["administrador"]),validateRequest(pagoTransferenciaSchema),pago_transferenciaController.create)
    .put('/:id',authenticateToken,authorizeRoles(["administrador"]),validateRequest(pagoTransferenciaSchema),pago_transferenciaController.update)
    .delete('/:id',authenticateToken,authorizeRoles(["administrador"]),validateRequest(pagoTransferenciaSchema),pago_transferenciaController._delete);

module.exports=route;