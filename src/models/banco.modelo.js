const { Model, DataTypes } = require("sequelize");

const banco_tabla = "banco";

class banco extends Model {
  static config(sequelize) {
    return {
      sequelize,
      tableName: banco_tabla,
      modelName: "banco",
      timestamps: false,
    };
  }
}
const bancoSchema = {
      id_Banco: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      nombreBanco: {
        allowNull: false,
        type: DataTypes.STRING(32)
      }
};

module.exports = { banco, bancoSchema };
