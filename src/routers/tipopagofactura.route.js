const express=require('express');
const route = express.Router();
const tipopagofacturaController = require('../controllers/tipopagofacturaController');
const{validateRequest}= require("../middleware/validateRequest");
const {tipopagofacturaSchema}= require("../schema/tipopagofactura.schema");
const { authenticateToken, authorizeRoles } = require("../middleware/auth");
route
    .get('/',authenticateToken,authorizeRoles(["administrador","Empleado"]),tipopagofacturaController.get)
    .get('/:id',authenticateToken,authorizeRoles(["administrador","Empleado"]),tipopagofacturaController.getById)
    .post('/',authenticateToken,authorizeRoles(["administrador"]),validateRequest(tipopagofacturaSchema),tipopagofacturaController.create)
    .put('/:id',authenticateToken,authorizeRoles(["administrador"]),validateRequest(tipopagofacturaSchema),tipopagofacturaController.update)
    .delete('/:id',authenticateToken,authorizeRoles(["administrador"]),tipopagofacturaController._delete);

    // route
    // .get('/',tipopagofacturaController.get)
    // .get('/:id',tipopagofacturaController.getById)
    // .post('/',tipopagofacturaController.create)
    // .put('/:id',tipopagofacturaController.update)
    // .delete('/:id',tipopagofacturaController._delete);


module.exports=route;