const fs = require('fs');
const path = require('path');

const db = require ("../database/models");
const Op = db.Sequelize.Op;

const adminService = require ('../services/adminService');

const adminController = { 

    // Admin Products
    start: (req,res) =>{res.render("products/productsAdmin.ejs")},

    //Create products form

    create: async (req, res) => {
        try {
            const {categorias, colores} = await adminService.getAll() //esta es la promesa
            res.render("products/productCreate.ejs", {categorias, colores});
        } catch (error) {
            console.error('Error fetching categories and colors:', error);
            res.status(500).send('Internal Server Error');
        }
    },
    
    // Create products button
    store: async function (req,res) {
        try {   
            await adminService.createProduct(req.body, req.files);
            res.redirect(`/admin`);
        } catch (error) {
            res.send(error);
        } 
    },

    // Edit products form
    edit: (req, res) => {
        const id = adminService.locationProduct(req.params.id);
        if (id == -1){
            res.status(404).render("error404.ejs")
        } else {
            res.render("products/productEdit.ejs", {product: adminService.getOneBy(req.params.id)});
        }
    },
    // Edit product button
    update: (req, res) => {
        res.render("products/productsAdmin.ejs",{product: adminService.updateProduct(req.params.id, req.body)});
    },

    // Delete products form
    delete: (req, res) => {
        const id = adminService.locationProduct(req.params.id);
        if (id == -1){
            res.status(404).render("error404.ejs")
        } else {
            res.render("products/productDelete.ejs", {product: adminService.getOneBy(req.params.id)});
        }
    },
    // Delete product button
    destroy : (req, res) => {
        res.render("products/productsAdmin.ejs", {product: adminService.deleteProduct(req.params.id)});
    }
};

module.exports = adminController;