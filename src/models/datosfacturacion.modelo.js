const { Model, DataTypes } = require("sequelize");

const datosfacturacion_tabla = "datosfacturacion";

class datosfacturacion extends Model {
  static config(sequelize) {
    return {
      sequelize,
      tableName: datosfacturacion_tabla,
      modelName: "datosfacturacion",
      timestamps: false,
    };
  }
}
const datosfacturacionSchema = {
  id_datosFactura: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER,
  },
  cai: {
    allowNull: false,
    type: DataTypes.STRING(64),
  },
  RTN: {
    allowNull: false,
    type: DataTypes.STRING(64),
    unique: true,
  },
  fechaEmision: {
    allowNull: false,
    type: DataTypes.DATEONLY,
  },
  RangoInicial: {
    allowNull: false,
    type: DataTypes.STRING(64),
  },
};

module.exports = { datosfacturacion, datosfacturacionSchema };
