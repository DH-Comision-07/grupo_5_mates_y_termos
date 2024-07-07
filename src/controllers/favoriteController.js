const fs = require('fs');
const path = require('path');

const db = require ("../database/models");
const Op = db.Sequelize.Op;

const favoriteService = require ('../services/favoriteService');
const { Console } = require('console');

const favoriteController = { 
        
    addFavorite: async function (req, res) {
        
        const userId= 1;
        const productId =3
        console.log(userId)
        console.log(productId);
        try {
            const message = await favoriteService.addProductToFavorites(userId, productId);
            //res.render("users/favorites.ejs", {favoritos: favoritos});
            res.status(200).send(message);
        } catch (error) {
            res.status(400).send(error.message);
        }
    },

    removeFavorite: async function (req, res) {
        const { userId, productId } = req.body;
        try {
            const message = await favoriteService.removeProductFromFavorites(userId, productId);
            res.status(200).send(message);
        } catch (error) {
            res.status(400).send(error.message);
        }
    },
    getFavorites: async function (req, res) {
        const { userId } = req.params;
        
        try {
            const favorites = await favoriteService.getUserFavorites(userId);
            res.render("users/favorites.ejs", {favoritos: favorites});
            //res.status(200).json(favorites);
        } catch (error) {
            res.status(400).send(error.message);
        }
    }
}
    
module.exports = favoriteController;