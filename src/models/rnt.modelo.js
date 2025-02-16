const { Model, DataTypes } = require("sequelize");

const rtn_tabla = "rtn";

class rtn extends Model {
  static config(sequelize) {
    return {
      sequelize,
      tableName: rtn_tabla,
      modelName: "rtn",
      timestamps: false,
    };
  }
  static associate(models) {
   
    rtn.belongsTo(models.tipo_servicio, {
      as: "ticket",
      foreignKey: "id_Ticket",
    });

    rtn.belongsTo(models.tipo_servicio, {
      as: "servicio", 
      foreignKey: "id_Servicio",
    });
  }

}
const rtnSchema = {
  id_RTN: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER,
  },
  id_Ticket: {
    allowNull: false,
    type: DataTypes.INTEGER,
    references: {
      model: "tipo_servicio",
      key: "id_Servicio",
    },
  },
  id_Servicio: {
    allowNull: false,
    type: DataTypes.INTEGER,
    references: {
      model: "tipo_servicio",
      key: "id_Servicio",
    },
  },
  
  RNT:{
    allowNull: false,
    type: DataTypes.STRING(14)
  
  },
  nombre:{
    allowNull: false,
    type: DataTypes.STRING(255)
  
  },

};

module.exports = { rtn, rtnSchema };
