const fs = require('fs');
const path = require('path');

const productService = require ('../model/productService')

const parseProducts = require ("../model/products.json");
const productsFilePath = path.join(__dirname, '../model/products.json');

const productsController = { 
    
    // Admin Products
    start: (req,res) =>{res.render("products/productsAdmin.ejs")},
    
    // All products
    index: (req, res) => {
         res.render("products/productAll.ejs", {products : productService.getAll( )});
    },  

    // Detail products
    detail: (req, res) => {res.render("products/productDetail.ejs" , {product: productService.getOneBy(req.params.id)});
    },

    // Cart products
    getCart: (req,res)=> {res.render("products/productCart.ejs")},
    
    // Edit products form
    edit: (req, res) => {
        const id = productService.locationProduct(req.params.id);
        if (id == -1){
            res.status(404).render("error404.ejs")
        } else {
            res.render("products/productEdit.ejs", {product: productService.getOneBy(req.params.id)});
        }
    },
    // Edit product button
    update: (req, res) => {
        res.render("products/productsAdmin.ejs",{product: productService.updateProduct(req.params.id, req.body)});
    },

    //Create products form
    create: (req,res)=> {
        res.render("products/productCreate.ejs");
    },
    // Create products button
    store:(req, res) => {
        res.render("products/productsAdmin.ejs",{product: productService.createProduct(req.params.id, req.body, req.files)});
    },
    
    // Delete products form
    delete: (req, res) => {
        const id = productService.locationProduct(req.params.id);
        if (id == -1){
            res.status(404).render("error404.ejs")
        } else {
            res.render("products/productDelete.ejs", {product: productService.getOneBy(req.params.id)});
        }
    },
    // Delete product button
    destroy : (req, res) => {
        res.render("products/productsAdmin.ejs", {product: productService.deleteProduct(req.params.id)});
    }
}
module.exports = productsController;

 /* update: (req,res)=> {
        const product = searchProductById(req.params.id)
        if (!product) {
            res.status(404).send("Product not found");
        }
        res.render("products/product.ejs", { product });
    } */

/* function searchProductById(id) {
    const products = require(path.join(__dirname, '../model/products.json'))
    const productJson = products.find(product => product.id == id)
    if (!productJson) {
        return null
    }
    const product = new Product(productJson.id, productJson.name, productJson.description, productJson.price, productJson.images, productJson.category, productJson.colors, productJson.stock)
    return product
}

function Product(id, name, description, price, images, category, colors, stock) {
    this.id = id
    this.name = name
    this.description = description
    this.price = price
    this.images = images
    this.category = category
    this.colors = colors
    this.stock = stock    
} */