module.exports = (Sequelize, DataTypes) => {
    let alias = "Categorias";
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
        }
    };

    let config ={
        tableName: "categories",
        timestamps: false
    };
    const Categories = Sequelize.define(alias, cols, config);
    
    Categories.associate = (models) => {
        Categories.hasMany(models.Productos, {
            as: "productos",
            foreignKey: "category_id"
        })
    }

    return Categories;
};