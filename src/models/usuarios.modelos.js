const {Model,DataTypes}= require('sequelize');

const usuarios_tabla ='usuarios';
class usuarios extends Model{
    static config (sequelize){
        return{
            sequelize,
            tableName: usuarios_tabla,
            modelName:'usuarios',
            timestamps: false,

        }
    }
    static associate(models) {
        this.hasMany(models.rol_usuario, {
            foreignKey: 'id_Usuario',
        });
    }

}
const usuariosSchema={
    id_Usuario:{
        allowNull: false,
        autoIncrement: true,
        primaryKey:true,
        type: DataTypes.INTEGER 
    },
    nombre:{
        allowNull:false, 
        type: DataTypes.STRING(64),
        validate: {
            notEmpty: { msg: "El nombre no puede estar vacío" },
            len: { args: [3, 64], msg: "El nombre debe tener entre 3 y 64 caracteres" }
        }
       
    },
    contrasena:{
        allowNull:false,
        type: DataTypes.STRING
       
    },
}


module.exports={usuarios,usuariosSchema};