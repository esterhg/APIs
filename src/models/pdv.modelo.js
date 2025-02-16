const { Model, DataTypes } = require("sequelize");

const pdv_tabla = "pdv";

class pdv extends Model {
  static config(sequelize) {
    return {
      sequelize,
      tableName: pdv_tabla,
      modelName: "pdv",
      timestamps: false,
    };
  }
}
const pdvSchema = {
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
};

module.exports = { pdv, pdvSchema };
