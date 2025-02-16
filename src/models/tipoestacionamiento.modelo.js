const { Model, DataTypes } = require("sequelize");

const tipoestacionamiento_tabla = "tipoestacionamiento";

class tipoestacionamiento extends Model {
  static config(sequelize) {
    return {
      sequelize,
      tableName: tipoestacionamiento_tabla,
      modelName: "tipoestacionamiento",
      timestamps: false,
    };
  }
}
const tipoestacionamientoSchema = {
  id_Estacionamiento: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER,
  },
  tipo_Estacionamiento: {
    allowNull: false,
    type: DataTypes.STRING(32),
  }
};

module.exports = { tipoestacionamiento,tipoestacionamientoSchema };
