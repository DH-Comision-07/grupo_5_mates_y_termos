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
        Products.belongsToMany(models.Images, {
            as:"producto",
            through: "product_images",
            foreignKey: "product_id",
            otherKey:"image_id",
            timestamps: false
        })
    
        Products.belongsTo(models.Colores, {
            as: "colores",
            foreignKey: "color_id"
        })
       
        Products.belongsTo(models.Categorias, {
            as: "categorias",
            foreignKey: "category_id"
        })
    }
    return Products;
};