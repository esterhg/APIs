const express=require('express');
const route = express.Router();
const tipofuncionarioController = require('../controllers/tipofuncionarioController');
const {validateRequest} = require("../middleware/validateRequest");
const{tipofuncionarioSchema}=require("../schema/tipofuncionario.schema");
const { authenticateToken, authorizeRoles } = require("../middleware/auth");

route
    .get('/',authenticateToken,authorizeRoles(["administrador","Empleado"]),tipofuncionarioController.get)
    .get('/:id',authenticateToken,authorizeRoles(["administrador","Empleado"]),tipofuncionarioController.getById)
    .post('/',authenticateToken,authorizeRoles(["administrador"]),validateRequest(tipofuncionarioSchema),tipofuncionarioController.create)
    .put('/:id',authenticateToken,authorizeRoles(["administrador"]),validateRequest(tipofuncionarioSchema),tipofuncionarioController.update)
    .delete('/:id',authenticateToken,authorizeRoles(["administrador"]),tipofuncionarioController._delete);

module.exports=route;