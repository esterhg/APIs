const express=require('express');
const route = express.Router();
const rtnController = require('../controllers/rtnController');
const{validateRequest}=require("../middleware/validateRequest");
const {rtnSchema}=require("../schema/rtn.schema");
const { authenticateToken, authorizeRoles } = require("../middleware/auth");
route
    .get('/',authenticateToken,authorizeRoles(["administrador","Empleado"]),rtnController.get)
    .get('/:id',authenticateToken,authorizeRoles(["administrador","Empleado"]),rtnController.getById)
    .post('/',authenticateToken,authorizeRoles(["administrador"]),validateRequest(rtnSchema),rtnController.create)
    .put('/:id',authenticateToken,authorizeRoles(["administrador"]),validateRequest(rtnSchema),rtnController.update)
    .delete('/:id',authenticateToken,authorizeRoles(["administrador"]),validateRequest(rtnSchema),rtnController._delete);

module.exports=route;