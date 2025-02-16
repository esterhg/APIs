const { Model, DataTypes } = require("sequelize");

const tipopagofactura_tabla = "tipopagofactura";

class tipopagofactura extends Model {
  static config(sequelize) {
    return {
      sequelize,
      tableName: tipopagofactura_tabla,
      modelName: "tipopagofactura",
      timestamps: false,
    };
  }
}
const tipopagofacturaSchema = {
  id_TipoPago: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER,
  },
 
  name_TipoPago: {
    allowNull: false,
    type: DataTypes.STRING(20),
  }
  
};

module.exports = { tipopagofactura, tipopagofacturaSchema };
