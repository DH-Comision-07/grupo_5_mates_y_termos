const bcrypt = require ("bcryptjs");

module.exports = (Sequelize, DataTypes) => {
    let alias = "Usuarios";
    let cols = {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        name:{
            type: DataTypes.STRING(250),
            allowNull: false   
        },
        lastName:{
            type: DataTypes.STRING(250),
            allowNull: false   
        },
        email:{
            type: DataTypes.STRING(100),
            allowNull: false   
        },
        birthdate:{
            type: DataTypes.DATE,
            allowNull: false   
        },
        image:{
            type: DataTypes.STRING(100),
            allowNull: false   
        },
        password:{
            type: DataTypes.STRING(250),
            allowNull: false   
        },
        role:{
            type: DataTypes.INTEGER(2),
            allowNull: false   
        },
    };

    let config ={
        tableName: "users",
        timestamps: false
    };
    const Users = Sequelize.define(alias, cols, config);
    
    Users.associate = (models) => {
        Users.belongsToMany(models.Productos, {
            as:"productos",
            through: "shopping_cart",
            foreignKey: "user_id",
            otherKey:"product_id",
            timestamps: false
        })
        Users.hasMany(models.Carritos, { 
            foreignKey: 'user_id' 
        })
    },

    Users.beforeCreate(async (user) => {
        const salt = await bcrypt.genSalt(10); //Salt genera secuencia aleatoria de bytes 
        user.password = await bcrypt.hash(user.password, salt);
      })

    return Users;
};