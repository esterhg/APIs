const {Model,DataTypes}= require('sequelize');

const rol_usuario_tabla ='rol_usuario';

class rol_usuario extends Model{
    static config (sequelize){
        return{
            sequelize,
            tableName: rol_usuario_tabla,
            modelName:'rol_usuario',
            timestamps: false,

        }
    }
    static associate(models) {
        this.belongsTo(models.usuarios, {
            foreignKey: 'id_Usuario',
        });
        this.belongsTo(models.roles, {
            foreignKey: 'id_Rol',
          
        });
    }
}
const rol_usuarioSchema={
  
    id_RolUsuario:{
        allowNull: false,
        autoIncrement: true,
        primaryKey:true,
        type: DataTypes.INTEGER 
    },
    id_Usuario:{
        allowNull: false,
        type: DataTypes.INTEGER,
        references: {
            model: 'usuarios',
            key: 'id_Usuario',
        },
    },
    id_Rol: {
        allowNull: false,
        type: DataTypes.INTEGER,
        references: {
            model: 'roles',
            key: 'id_Rol',
        },
    },
 
}

module.exports={rol_usuario,rol_usuarioSchema};