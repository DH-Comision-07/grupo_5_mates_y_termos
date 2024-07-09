const fs = require('fs');
const path = require('path');

const db = require ("../database/models");
const Op = db.Sequelize.Op;

const favoriteService = require ('../services/favoriteService');

const favoriteController = { 
        
    showFavorites: async (req, res) => {
        const userId = req.params.id; // El parámetro id viene de la ruta /favorite/:id
        const favorites = await favoriteService.getFavoritesByUserId(userId);
        res.render('favorites', { favorites });
    },
    addFavorite: async (req, res) => {
        const userId = req.params.userId;  // El parámetro userId viene de la ruta /favorite/:userId
        const productId = req.body.productId;  // El parámetro productId viene del cuerpo de la solicitud (req.body)
        await favoriteService.addFavorite(userId, productId);
        res.redirect(`/users/favorite/${userId}`);
    },
    deleteFavorite: async (req, res) => {
        const id = req.params.id;  // El parámetro id viene de la ruta /favorite/:id
        await favoriteService.deleteFavorite(id);
        res.redirect('back');
    }
}
    
module.exports = favoriteController;