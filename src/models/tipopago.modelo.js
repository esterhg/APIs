const { Model, DataTypes } = require("sequelize");

const tipopago_tabla = "tipopago";

class tipopago extends Model {
  static config(sequelize) {
    return {
      sequelize,
      tableName: tipopago_tabla,
      modelName: "tipopago",
      timestamps: false,
    };
  }
}
const tipopagoSchema = {
  id_Pago: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER,
  },
 
  tipo_Pago: {
    allowNull: false,
    type: DataTypes.STRING(32),
  },
  
};

module.exports = { tipopago, tipopagoSchema };
