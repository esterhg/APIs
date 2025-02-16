const { Model, DataTypes } = require("sequelize");

const tipofuncionario_tabla = "tipofuncionario";

class tipofuncionario extends Model {
  static config(sequelize) {
    return {
      sequelize,
      tableName: tipofuncionario_tabla,
      modelName: "tipofuncionario",
      timestamps: false,
    };
  }
}
const tipofuncionarioSchema = {
  id_Funcionario: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER,
  },

  tipo_Funcionario: {
    allowNull: false,
    type: DataTypes.STRING(32),
  },
};

module.exports = { tipofuncionario, tipofuncionarioSchema };
