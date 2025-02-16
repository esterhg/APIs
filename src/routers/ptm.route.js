const express=require('express');
const route = express.Router();
const ptmController = require('../controllers/ptmController');
const{validateRequest}=require("../middleware/validateRequest");
const{ptmSchema}=require("../schema/ptm.schema");
const { authenticateToken, authorizeRoles } = require("../middleware/auth");

route
    .get('/',authenticateToken,authorizeRoles(["administrador","Empleado"]),ptmController.get)
    .get('/:id',authenticateToken,authorizeRoles(["administrador","Empleado"]),ptmController.getById)
    .post('/',authenticateToken,authorizeRoles(["administrador"]),validateRequest(ptmSchema),ptmController.create)
    .put('/:id',authenticateToken,authorizeRoles(["administrador"]),validateRequest(ptmSchema),ptmController.update)
    .delete('/:id',authenticateToken,authorizeRoles(["administrador"]),validateRequest(ptmSchema),ptmController._delete);

module.exports=route;