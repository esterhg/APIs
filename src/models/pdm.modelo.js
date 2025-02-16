const { Model, DataTypes } = require("sequelize");

const pdm_tabla = "pdm";

class pdm extends Model {
  static config(sequelize) {
    return {
      sequelize,
      tableName: pdm_tabla,
      modelName: "pdm",
      timestamps: false,
    };
  }
}
const pdmSchema = {
  id_Ticket: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER,
  },
  id_Servicio: {
    allowNull: false,
    type: DataTypes.INTEGER,
    references: {
      model: "tipo_servicio",
      key: "id_Servicio",
    },
  },
  id_Usuario: {
    allowNull: false,
    type: DataTypes.INTEGER,
    references: {
      model: "usuarios",
      key: "id_Usuario",
    },
  },
  fecha: {
    allowNull: false,
    type: DataTypes.DATEONLY,
  },
  hora_Entrada: {
    allowNull: false,
    type: DataTypes.TIME,
  },
  ncasco: {
    allowNull: false,
    type: DataTypes.INTEGER,
  },
  
};

module.exports = { pdm, pdmSchema };
