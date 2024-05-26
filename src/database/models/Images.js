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
        }, 
        product_id:{
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: 'Productos',
                key: 'id'
            }  
        }, 
    };

    let config ={
        tableName: "images",
        timestamps: false
    };
    const Images = Sequelize.define(alias, cols, config);

    Images.associate = (models) => {
        Images.belongsTo(models.Productos, {
            foreignKey: "product_id",
        })
    }

    return Images;
};