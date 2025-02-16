const { Model, DataTypes } = require("sequelize");

const pago_transferencia_tabla = "pago_transferencia";

class pago_transferencia extends Model {
  static config(sequelize) {
    return {
      sequelize,
      tableName: pago_transferencia_tabla,
      modelName: "pago_transferencia",
      timestamps: false,
    };
  }
}
const pago_transferenciaSchema = {
  id_PagoTrasferencia: {
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
  id_Banco: {
    allowNull: false,
    type: DataTypes.INTEGER,
    references: {
      model: "banco",
      key: "id_Banco",
    },
  },
  
  RNT:{
    allowNull: false,
    type: DataTypes.STRING(18)
  
  },
  nombre:{
    allowNull: false,
    type: DataTypes.STRING(255)
  
  },

};

module.exports = { pago_transferencia, pago_transferenciaSchema };
