const express = require('express');
const routes = express.Router();
const path = require ("path");

const adminController = require('../controllers/adminController');
const uploadFile = require ("../middlewares/multerMiddlewares");
const credentialMid = require ("../middlewares/credentialsMiddlewares");

// INICIO (start) productos
routes.get('/', credentialMid.adminMid, adminController.start); 

/* CREAR (create) producto */
routes.get("/create", credentialMid.adminMid, adminController.create);
routes.post('/', uploadFile, adminController.store); 

// /* EDITAR (update) producto */ 
routes.get("/update/:id/", credentialMid.adminMid, adminController.edit);
routes.put('/update/:id/', adminController.update); 

// /* BORRAR (delete) producto */ 
routes.get("/delete/:id/", credentialMid.adminMid, adminController.delete); 
routes.delete("/delete/:id", adminController.destroy); 

module.exports = routes;