module.exports = (Sequelize, DataTypes) => {
    let alias = "Favoritos";
    let cols = {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        user_id: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        product_id: {
            type: DataTypes.INTEGER,
            allowNull: false
        }
    };

    let config = {
        tableName: "favorite_product",
        timestamps: false
    };

    const Favorites = Sequelize.define(alias, cols, config);

    Favorites.associate = (models) => {
        Favorites.belongsTo(models.Usuarios, {
            as: "usuarioFavorit",
            foreignKey: 'user_id'
        });
        Favorites.belongsTo(models.Productos, {
            as: "productoFavorit",
            foreignKey: 'product_id'
        });
    };

    return Favorites;
};