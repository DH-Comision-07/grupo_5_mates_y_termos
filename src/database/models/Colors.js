module.exports = (Sequelize, DataTypes) => {
    let alias = "Colores";
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
        tableName: "colors",
        timestamps: false
    };
    const Colors = Sequelize.define(alias, cols, config);
    
    Colors.associate = (models) => {
        Colors.hasMany(models.Productos, {
            as: "productos",
            foreignKey: "color_id"
        })
    }

    return Colors;
};