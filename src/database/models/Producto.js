module.exports = (Sequelize, DataTypes) => {
    let alias = "Productos";
    let cols = {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        name:{
            type: DataTypes.STRING,
            allowNull: false   
        },
        description:{
            type: DataTypes.TEXT(250),
            allowNull: false
        },      
        price:{
            type: DataTypes.DECIMAL(10),
            allowNull: false
        },
        discount:{
            type: DataTypes.DECIMAL,
            allowNull: false,
        },
        discount_price: {
            type: DataTypes.DECIMAL,
            allowNull: false
        },
        stock:{
            type: DataTypes.INTEGER,
            allowNull: false
        }
    };

    let config ={
        tableName: "products",
        timestamps: false
    };
    const Products = Sequelize.define(alias, cols, config);
    
    Products.associate = (models) => {
        Products.hasMany(models.Images, {
            as:"producto",
            foreignKey: "product_id", 
        })
    
        Products.belongsTo(models.Colores, {
            as: "colores",
            foreignKey: "color_id"
        })
       
        Products.belongsTo(models.Categorias, {
            as: "categorias",
            foreignKey: "category_id"
        })
        Products.belongsToMany(models.Usuarios, {
            as:"usuarios",
            through: "shopping_cart",
            foreignKey: "product_id",
            otherKey:"user_id",
            timestamps: false
        })
        Products.hasMany(models.Carritos,{ 
            foreignKey: 'product_id' 
        })
        Products.hasMany(models.Favoritos, { 
            as:"favoritProducto",
            foreignKey: 'product_id' 
        });
    }
    return Products;
};