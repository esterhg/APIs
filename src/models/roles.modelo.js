const { Model, DataTypes } = require("sequelize");

const roles_tabla = "roles";

class roles extends Model {
  static config(sequelize) {
    return {
      sequelize,
      tableName: roles_tabla,
      modelName: "roles",
      timestamps: false,
    };
  }

  static associate(models) {
    this.belongsToMany(models.roles, {
        through: models.roles_usuario,  
        foreignKey: 'usuario_id',       
        otherKey: 'rol_id',             
        as: 'roles'                     
    });
}
}
const rolesSchema = {
  id_Rol: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER,
  },
  nombre_Rol: {
    allowNull: false,
    type: DataTypes.STRING(32),
    field: "nombre_Rol",
  },
};

module.exports = { roles, rolesSchema };
