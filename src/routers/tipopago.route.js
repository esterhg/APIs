const express=require('express');
const route = express.Router();
const tipopagoController = require('../controllers/tipopagoController');
const {validateRequest}=require('../middleware/validateRequest');
const {tipopagoSchema}=require('../schema/tipopago.schema');
const { authenticateToken, authorizeRoles } = require("../middleware/auth");
route
    .get('/',authenticateToken,authorizeRoles(["administrador","Empleado"]),tipopagoController.get)
    .get('/:id',authenticateToken,authorizeRoles(["administrador","Empleado"]),tipopagoController.getById)
    .post('/',authenticateToken,authorizeRoles(["administrador"]),validateRequest(tipopagoSchema),tipopagoController.create)
    .put('/:id',authenticateToken,authorizeRoles(["administrador"]),validateRequest(tipopagoSchema),tipopagoController.update)
    .delete('/:id',authenticateToken,authorizeRoles(["administrador"]),tipopagoController._delete);

module.exports=route;