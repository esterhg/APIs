const { Model, DataTypes } = require("sequelize");

const nofactura_tabla = "nofactura";

class nofactura extends Model {
  static config(sequelize) {
    return {
      sequelize,
      tableName: nofactura_tabla,
      modelName: "nofactura",
      timestamps: false,
      
    };
  }
}
const nofacturaSchema = {
  id_Nofactura: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER,
  },
  id_Ticket: {
    allowNull: false,
    type: DataTypes.INTEGER,
  },
  id_Servicio: {
    allowNull: false,
    type: DataTypes.INTEGER,
    references: {
      model: "tipo_servicio",
      key: "id_Servicio",
    },
  },
  id_datosFactura: {
    allowNull: false,
    type: DataTypes.INTEGER,
    references: {
      model: "datosfacturacion",
      key: "id_datosFactura",
    },
  },
  id_Usuario: {
    allowNull: false,
    type: DataTypes.INTEGER,
    references: {
      model: "usuarios",
      key: "id_Usuario",
    },
  },
  Fecha: {
    allowNull: false,
    type: DataTypes.DATEONLY,
  },
  hora_Salida: {
    allowNull: false,
    type: DataTypes.TIME,
  },
  subtotal: {
    allowNull: false,
    type: DataTypes.DOUBLE(8,2),
  },
  ISV: {
    allowNull: false,
    type: DataTypes.DOUBLE(8,2),
  },
  total: {
    allowNull: false,
    type: DataTypes.DOUBLE(8,2),
  },
  Recibido: {
    allowNull: false,
    type: DataTypes.DOUBLE(8,2),
  },
  cambio: {
    allowNull: false,
    type: DataTypes.DOUBLE(8,2),
  },
  
};

module.exports = { nofactura, nofacturaSchema };
