const express = require('express');

const usuariosRouter = require('./usuarios.route');
const rol_usuarioRouter = require('./rol_usuario.route')
const rolesRouter = require('./roles.route');
const tipo_servicio_Router = require('./tipo_servicio.route');
const pdvRouter = require('./pdv.route');
const pmRouter = require('./pm.route');
const pdmRouter = require('./pdm.route');
const ptvRouter = require('./ptv.route');
const ptmRouter = require('./ptm.route');
const phvRouter = require('./phv.route');
const phmRouter = require('./phm.route');
const datosfacturacionRouter = require('./datosfacturacion.route');
const tipopagofacturaRouter = require('./tipopagofactura.route');
const facturaRouter = require('./factura.route');
const nofacturaRouter = require('./nofactura.route');
const tipopagoRouter = require('./tipopago.route');
const tipofuncionarioRouter = require('./tipofuncionario.route');
const tipoestacionamientoRouter = require('./tipoestacionamiento.route');
const datosmRouter = require('./datosm.route');
const bancoRouter = require('./banco.route');
const tipovehiculoRouter = require('./tipovehiculo.route');
const pago_transferenciaRouter = require('./pago_transferencia.route');
const estadofacturaRouter = require('./estadofactura.route');
const rtnRouter = require('../routers/rtn.route');
const authRouter = require('../routers/auth.route');

function routeApi(app){
    const router = express.Router();
    app.use('/api/v1',router);
    router.use('/usuarios',usuariosRouter);
    router.use('/roles',rolesRouter);
    router.use('/rol_usuario',rol_usuarioRouter);
    router.use('/tipo_servicio',tipo_servicio_Router);
    router.use('/pdv',pdvRouter);
    router.use('/pm',pmRouter);
    router.use('/pdm',pdmRouter);
    router.use('/ptv',ptvRouter);
    router.use('/ptm',ptmRouter);
    router.use('/phv',phvRouter);
    router.use('/phm',phmRouter);
    router.use('/datosfacturacion',datosfacturacionRouter);
    router.use('/tipopagofactura',tipopagofacturaRouter);
    router.use('/factura',facturaRouter);
    router.use('/nofactura',nofacturaRouter);
    router.use('/tipopago',tipopagoRouter);
    router.use('/tipofuncionario',tipofuncionarioRouter);
    router.use('/tipoestacionamiento',tipoestacionamientoRouter);
    router.use('/datosm',datosmRouter);
    router.use('/banco',bancoRouter);  
    router.use('/tipovehiculo',tipovehiculoRouter); 
    router.use('/pago_transferencia',pago_transferenciaRouter);  
    router.use('/estadofactura',estadofacturaRouter); 
    router.use('/rtn',rtnRouter); 
    router.use('/auth',authRouter); 
    
}

module.exports=routeApi;

