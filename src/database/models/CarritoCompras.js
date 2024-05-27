module.exports = (Sequelize, DataTypes) => {
    let alias = "Carritos";
    let cols = {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        quantity:{
            type: DataTypes.INTEGER,
            allowNull: false   
        }
    };

    let config ={
        tableName: "shopping_cart",
        timestamps: false
    };
    const Carrito = Sequelize.define(alias, cols, config);
    
    return Carrito;
};