const fs = require('fs');
const path = require ("path");

const db = require ("../database/models");
const Op = db.Sequelize.Op;

let favoriteService = {

    addProductToFavorites: async (userId, productId) => {
        try {
            const user = await db.Usuarios.findByPk(userId);
            const product = await db.Productos.findByPk(productId);

            if (!user || !product) {
                throw new Error('Usuario o Producto no encontrado');
            }

            await db.Favoritos.create({user_id: userId, product_id: productId });
            return 'Producto agregado a favoritos';
        } catch (error) {
            throw new Error('Error agregando producto a favoritos: ' + error.message);
        }
    },

    removeProductFromFavorites: async (userId, productId) => {
        try {
            const favorite = await db.Favoritos.findOne({ where: { user_id: userId, product_id: productId } });

            if (!favorite) {
                throw new Error('Favorito no encontrado');
            }

            await favorite.destroy();
            return 'Producto eliminado de favoritos';
        } catch (error) {
            throw new Error('Error eliminando producto de favoritos: ' + error.message);
        }
    },
    getUserFavorites: async function (userId) {
        try {
            const userFavorites = await db.Favoritos.findAll({
                where: { user_id: userId },
                include:[
                    {association: "usuarioFavorit"},
                    {association: "productoFavorit"}
                ]}
               // include: [{ model: Productos, as: 'productoFavorit' }]
            );
    
            return userFavorites;
        } catch (error) {
            throw new Error('Error obteniendo favoritos: ' + error.message);
        }
    }

    
};

module.exports = favoriteService;