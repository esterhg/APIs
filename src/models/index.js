const {usuarios, usuariosSchema}= require('./usuarios.modelos');
const {rol_usuario, rol_usuarioSchema}= require('./rol_usuario.modelo');
const {roles, rolesSchema}= require('./roles.modelo');
const {tipo_servicio, tipo_servicioSchema}= require('./tipo_servicio.modelo');
const {pdv, pdvSchema}= require('./pdv.modelo');
const {pm, pmSchema}= require('./pm.modelo');
const {pdm, pdmSchema}= require('./pdm.modelo');
const {ptv, ptvSchema}= require('./ptv.modelo');
const {ptm, ptmSchema}= require('./ptm.modelo');
const {phv, phvSchema}= require('./phv.modelo');
const {phm, phmSchema}= require('./phm.modelo');
const {datosfacturacion, datosfacturacionSchema}= require('./datosfacturacion.modelo');
const {tipopagofactura, tipopagofacturaSchema}= require('./tipopagofactura.modelo');
const {factura, facturaSchema}= require('./factura.modelo');
const {nofactura, nofacturaSchema}= require('./nofactura.modelo');
const {tipopago, tipopagoSchema}= require('./tipopago.modelo');
const {tipofuncionario, tipofuncionarioSchema}= require('./tipofuncionario.modelo');
const {tipoestacionamiento, tipoestacionamientoSchema}= require('./tipoestacionamiento.modelo');
const {datosm, datosmSchema}= require('./datosm.modelo');
const {banco, bancoSchema}= require('./banco.modelo');
const {tipovehiculo, tipovehiculoSchema}= require('./tipovehiculo.modelo');
const {pago_transferencia, pago_transferenciaSchema}= require('./pago_transferencia.modelo');
const { estadofactura, estadofacturaSchema}= require('./estadofactura.modelo');
const {rtn,rtnSchema}= require('../models/rnt.modelo');

function setupModels(sequelize){
    usuarios.init(usuariosSchema,usuarios.config(sequelize));
    roles.init(rolesSchema, roles.config(sequelize));
    rol_usuario.init(rol_usuarioSchema, rol_usuario.config(sequelize));
    tipo_servicio.init(tipo_servicioSchema, tipo_servicio.config(sequelize));
    pdv.init(pdvSchema, pdv.config(sequelize));
    pm.init(pmSchema, pm.config(sequelize));
    pdm.init(pdmSchema, pdm.config(sequelize));
    ptv.init(ptvSchema, ptv.config(sequelize));
    ptm.init(ptmSchema, ptm.config(sequelize));
    phv.init(phvSchema, phv.config(sequelize));
    phm.init(phmSchema, phm.config(sequelize));
    datosfacturacion.init(datosfacturacionSchema,datosfacturacion.config(sequelize));
    tipopagofactura.init(tipopagofacturaSchema, tipopagofactura.config(sequelize));
    factura.init(facturaSchema, factura.config(sequelize));
    nofactura.init(nofacturaSchema, nofactura.config(sequelize));
    tipopago.init(tipopagoSchema, tipopago.config(sequelize));
    tipofuncionario.init(tipofuncionarioSchema, tipofuncionario.config(sequelize));
    tipoestacionamiento.init(tipoestacionamientoSchema, tipoestacionamiento.config(sequelize));
    datosm.init(datosmSchema, datosm.config(sequelize));
    banco.init(bancoSchema, banco.config(sequelize));
    tipovehiculo.init(tipovehiculoSchema, tipovehiculo.config(sequelize));
    pago_transferencia.init(pago_transferenciaSchema, pago_transferencia.config(sequelize));
    estadofactura.init(estadofacturaSchema, estadofactura.config(sequelize));
    rtn.init(rtnSchema,rtn.config(sequelize));

    usuarios.associate(sequelize.models);
    rol_usuario.associate(sequelize.models);
    rtn.associate(sequelize.models);
}

module.exports = setupModels;