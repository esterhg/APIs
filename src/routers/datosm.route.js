const express=require('express');
const route = express.Router();
const datosmController = require('../controllers/datosmController');
const{validateRequest}=require("../middleware/validateRequest");
const{datosmSchema}=require("../schema/datosm.schema");
const { authenticateToken, authorizeRoles } = require("../middleware/auth");

route
    .get('/',authenticateToken,authorizeRoles(["administrador","Empleado"]),datosmController.get)
    .get('/:id',authenticateToken,authorizeRoles(["administrador","Empleado"]),datosmController.getById)
    .post('/',authenticateToken,authorizeRoles(["administrador"]),validateRequest(datosmSchema),datosmController.create)
    .put('/:id',authenticateToken,authorizeRoles(["administrador"]),validateRequest(datosmSchema),datosmController.update)
    .delete('/:id',authenticateToken,authorizeRoles(["administrador"]),validateRequest(datosmSchema),datosmController._delete);

module.exports=route;