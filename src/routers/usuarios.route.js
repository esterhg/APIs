const express=require('express');
const router = express.Router(); 
const usuariosController = require('../controllers/usuariosController');
const { validateRequest } = require('../middleware/validateRequest');
const { UsuarioSchema} = require("../schema/usuarios.schema");
const { authenticateToken, authorizeRoles } = require("../middleware/auth");

router.get("/",authenticateToken,authorizeRoles(["administrador","Empleado"]), usuariosController.get);
router.get("/:id",authenticateToken,authorizeRoles(["administrador","Empleado"]),usuariosController.getById);
router.post("/",authenticateToken,authorizeRoles(["administrador"]),validateRequest(UsuarioSchema), usuariosController.create);
router.put("/:id",authenticateToken,authorizeRoles(["administrador"]), validateRequest(UsuarioSchema), usuariosController.update);
router.delete("/:id",authenticateToken, authorizeRoles(["administrador"]), usuariosController._delete);

module.exports = router;