const { Model, DataTypes } = require("sequelize");

const tipo_servicio_tabla = "tipo_servicio";

class tipo_servicio extends Model {
  static config(sequelize) {
    return {
      sequelize,
      tableName: tipo_servicio_tabla,
      modelName: "tipo_servicio",
      timestamps: false,
    };
  }
}
const tipo_servicioSchema = {
  id_Servicio: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER,
  },
  identificador: {
    allowNull: false,
    type: DataTypes.STRING(4),

  },
  nombre_Servicio: {
    allowNull: false,
    type:  DataTypes.STRING(32),
  },
  tarifa: {
    allowNull: false,
    type: DataTypes.DOUBLE(5,2),
  },
  impuesto: {
    allowNull: false,
    type: DataTypes.DOUBLE(4,2),
  },
};

module.exports = { tipo_servicio, tipo_servicioSchema };
