const express=require('express');
const route = express.Router();
const nofacturaController = require('../controllers/nofacturaController');
const{validateRequest}=require("../middleware/validateRequest");
const{nofacturaSchema}=require("../schema/nofactura.schema");
const { authenticateToken, authorizeRoles } = require("../middleware/auth");


route
    .get('/',authenticateToken,authorizeRoles(["administrador","Empleado"]),nofacturaController.get)
    .get('/:id',authenticateToken,authorizeRoles(["administrador","Empleado"]),nofacturaController.getById)
    .post('/',authenticateToken,authorizeRoles(["administrador"]),validateRequest(nofacturaSchema),nofacturaController.create)
    .put('/:id',authenticateToken,authorizeRoles(["administrador"]),validateRequest(nofacturaSchema),nofacturaController.update)
    .delete('/:id',authenticateToken,authorizeRoles(["administrador"]),validateRequest(nofacturaSchema),nofacturaController._delete);

module.exports=route;
