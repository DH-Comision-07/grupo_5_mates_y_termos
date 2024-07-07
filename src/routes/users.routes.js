const express = require('express');
const routes = express.Router();
const path = require ("path");

const usersController = require('../controllers/usersController');
const favoriteController = require('../controllers/favoriteController');

const validateRegister = require('../middlewares/validateRegister');
const validateLogin = require('../middlewares/validateLogin');
const uploadFileUsers = require ("../middlewares/usersMulterMiddlewares");
const credentialMid = require ("../middlewares/credentialsMiddlewares");

routes.get('/indexUsers', usersController.start); 

routes.get("/login", credentialMid.guestMid, usersController.getLogin);
routes.post('/login', validateLogin, usersController.processLogin); 

routes.get("/register", credentialMid.guestMid, usersController.getRegister);
routes.post('/indexUsers',  uploadFileUsers.single("image"),  validateRegister, usersController.register); 

/* EDITAR (update)  */ 
routes.get("/edit/:id/", usersController.getUpdate);
routes.put('/edit/:id/', validateRegister, usersController.update); 

routes.get("/logout", usersController.logout);

routes.post('/favorite', favoriteController.addFavorite);
routes.delete('/favorite/:id', favoriteController.removeFavorite);
routes.get('/favorite/:userId', favoriteController.getFavorites);

module.exports = routes;