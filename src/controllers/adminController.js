const fs = require('fs');
const path = require('path');

const adminService = require('../model/adminService');

const adminController = { 

    // Admin Products
    start: (req,res) =>{res.render("products/productsAdmin.ejs")},

    //Create products form
    create: (req,res)=> {
        res.render("products/productCreate.ejs");
    },
    // Create products button
    store:(req, res) => {
        res.render("products/productsAdmin.ejs",{product: adminService.createProduct(req.params.id, req.body, req.files)});
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