const { Model, DataTypes } = require("sequelize");

const phm_tabla = "phm";

class phm extends Model {
  static config(sequelize) {
    return {
      sequelize,
      tableName: phm_tabla,
      modelName: "phm",
      timestamps: false,
    };
  }
}
const phmSchema = {
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

module.exports = { phm, phmSchema };
