const express = require('express');
const routes = express.Router();
const path = require ("path");

const adminController = require('../controllers/adminController');
const uploadFile = require ("../middlewares/multerMiddlewares");

// INICIO (start) productos
routes.get('/', adminController.start); 

/* CREAR (create) producto */
routes.get("/create", adminController.create);
routes.post('/', uploadFile, adminController.store); 

// /* EDITAR (update) producto */ 
routes.get("/update/:id/", adminController.edit);
routes.put('/update/:id/', adminController.update); 

// /* BORRAR (delete) producto */ 
routes.get("/delete/:id/", adminController.delete); 
routes.delete("/delete/:id", adminController.destroy); 

module.exports = routes;