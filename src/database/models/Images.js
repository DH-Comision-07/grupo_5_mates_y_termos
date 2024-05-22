module.exports = (Sequelize, DataTypes) => {
    let alias = "Images";
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
        tableName: "images",
        timestamps: false
    };
    const Images = Sequelize.define(alias, cols, config);

    Images.associate = (models) => {
        Images.belongsToMany(models.Productos, {
            as:"imagenes",
            through: "product_images",
            foreignKey: "image_id",
            otherKey:"product_id",
            timestamps: false
        })
    }

    return Images;
};