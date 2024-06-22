const express = require('express');
const routes = express.Router();
const path = require ("path");

const usersController = require('../controllers/usersController');
const validateRegister = require('../middlewares/validateRegister');
const validateLogin = require('../middlewares/validateLogin');
const uploadFileUsers = require ("../middlewares/usersMulterMiddlewares");
const credentialMid = require ("../middlewares/credentialsMiddlewares");

routes.get('/indexUsers', usersController.start); 

routes.get("/login", credentialMid.guestMid, usersController.getLogin);
routes.post('/login', validateLogin, usersController.processLogin); 

routes.get("/register", credentialMid.guestMid, usersController.getRegister);
routes.post('/indexUsers',  uploadFileUsers.single("image"),  validateRegister, usersController.register); 

routes.get("/logout", usersController.logout);

module.exports = routes;