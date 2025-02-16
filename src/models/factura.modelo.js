const { Model, DataTypes } = require("sequelize");

const factura_tabla = "factura";

class factura extends Model {
  static config(sequelize) {
    return {
      sequelize,
      tableName: factura_tabla,
      modelName: "factura",
      timestamps: false,
    };
  }
}
const facturaSchema = {
  id_Factura: {
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
    type: DataTypes.DOUBLE(8, 2),
  },
  ISV: {
    allowNull: false,
    type: DataTypes.DOUBLE(8, 2),
  },
  total: {
    allowNull: false,
    type: DataTypes.DOUBLE(8, 2),
  },
  tipo_Cliente: {
    allowNull: false,
    type: DataTypes.STRING(64),
  },
  Recibido: {
    allowNull: false,
    type: DataTypes.DOUBLE(8, 2),
  },
  cambio: {
    allowNull: false,
    type: DataTypes.DOUBLE(8, 2),
  },
  id_TipoPago: {
    allowNull: false,
    type: DataTypes.INTEGER,
    references: {
      model: "tipopagofactura",
      key: "id_TipoPago",
    },
  },
};

module.exports = { factura, facturaSchema };
