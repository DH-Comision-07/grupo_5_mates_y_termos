const fs = require('fs');
const path = require ("path");

const db = require ("../database/models");
const Op = db.Sequelize.Op;

let favoriteService = {

    getFavoritesByUserId: async (userId) => {
        return await db.Favoritos.findAll({
            where: { user_id: userId },
            include: [
                {association: 'productoFavorit'},
                {association: "usuarioFavorit"}]
        });
    },
    addFavorite: async (userId, productId) => {
        return await db.Favoritos.create({ user_id: userId, product_id: productId });
    },
    deleteFavorite: async (id) => {
        return await db.Favoritos.destroy({ where: { id } });
    }
};

module.exports = favoriteService;