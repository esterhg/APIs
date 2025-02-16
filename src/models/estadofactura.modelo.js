const { Model, DataTypes } = require("sequelize");

const estadofactura_tabla = "estadofactura";

class estadofactura extends Model {
  static config(sequelize) {
    return {
      sequelize,
      tableName: estadofactura_tabla,
      modelName: "estadofactura",
      timestamps: false,
      
    };
  }
}
const estadofacturaSchema = {
  id_EstadoFactura: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER,
  },
  id_Factura: {
    allowNull: false,
    type: DataTypes.INTEGER,
    references: {
      model: "factura",
      key: "id_Factura",
    },
  },
  Estado: {
    allowNull: false,
    type: DataTypes.STRING(11),
  }
  
};

module.exports = { estadofactura, estadofacturaSchema };
