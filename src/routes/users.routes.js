const express = require('express');
const routes = express.Router();
const usersController = require('../controllers/usersController');

routes.get("/login", usersController.getLogin);
routes.get("/register", (usersController.getRegister));

module.exports = routes;