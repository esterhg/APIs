const { Model, DataTypes } = require("sequelize");

const datosm_tabla = "datosm";

class datosm extends Model {
  static config(sequelize) {
    return {
      sequelize,
      tableName: datosm_tabla,
      modelName: "datosm",
      timestamps: false,
      
    };
  }
}
const datosmSchema = {
  id_Datos: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER,
  },
  id_Ticket: {
    allowNull: false,
    type: DataTypes.INTEGER,
    references: {
      model: "pm",
      key: "id_Ticket",
    },
  },
  id_Funcionario: {
    allowNull: false,
    type: DataTypes.INTEGER,
    references: {
      model: "tipofuncionario",
      key: "id_Funcionario",
    },
  },
  id_Estacionamiento: {
    allowNull: false,
    type: DataTypes.INTEGER,
    references: {
      model: "tipoestacionamiento",
      key: "id_Estacionamiento",
    },
  },
  id_Pago: {
    allowNull: false,
    type: DataTypes.INTEGER,
    references: {
      model: "tipopago",
      key: "id_Pago",
    },
  },
  nombre: {
    allowNull: false,
    type: DataTypes.STRING(64),
  },
  Tipo_Vehiculo: {
    allowNull: false,
    type: DataTypes.STRING(32),
  },
  marca: {
    allowNull: false,
    type: DataTypes.STRING(32),
  },
  modelo: {
    allowNull: false,
    type: DataTypes.STRING(32),
  },
  Placa: {
    allowNull: false,
    type: DataTypes.STRING(32),
  },
  Telefono: {
    allowNull: false,
    type: DataTypes.STRING(32),
  },
  id_institucion: {
    allowNull: false,
    type: DataTypes.INTEGER
  },
  
};

module.exports = { datosm, datosmSchema };
