const { Model, DataTypes } = require("sequelize");

const tipovehiculo_tabla = "tipovehiculo";

class tipovehiculo extends Model {
  static config(sequelize) {
    return {
      sequelize,
      tableName: tipovehiculo_tabla,
      modelName: "tipovehiculo",
      timestamps: false,
    };
  }
}
const tipovehiculoSchema = {
  idtipoVeh: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER,
  },
  tipoVeh: {
    allowNull: false,
    type: DataTypes.STRING(11)
  },
};

module.exports = { tipovehiculo, tipovehiculoSchema };
