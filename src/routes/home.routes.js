const express = require('express');
const routes = express.Router();
const path = require ("path");

const homeController = require('../controllers/homeController');

// TODOS (all) los productos
routes.get('/', homeController.index); 

module.exports = routes;