const fs = require('fs');
const path = require('path');

// const productService = require ('../model/productService')
const productService = require ('../services/productService')

const db = require ("../database/models");
const op = db.Sequelize.Op;

const productsController = { 

    // Todos los productos
    index: function (req,res){
        productService.getAll() //esta es la promesa
        .then((productos) => { //en productos entra la promesa
            res.render("products/productAll.ejs", {productos: productos});
        })
        .catch((error) => {
            res.render("products/productAll.ejs", {productos: error});
        })
    },

    // Detalle de cada producto, agrego ASYNC creando una funcion asincrona
    detail: async function (req, res) {
        try {
            let productos = await productService.getOneBy(req.params.id); // aqui voy al service
            if (productos == null) { 
                res.status(404).render("error404.ejs"); 
            } else {
                res.render("products/productDetail.ejs", {productos: productos});   
            } 
        } catch (error) {
            res.render("products/productDetail.ejs", {productos: error});
        }
    },

    // All products
    indexx: (req, res) => {
         res.render("products/productAll.ejs", {products : productService.getAll( )});
    },  

    // Detail products
    detaill: (req, res) => {
        const id = productService.locationProduct(req.params.id);
        if (id == -1){
            res.status(404).render("error404.ejs")
        } else {
            res.render("products/productDetail.ejs", {product :productService.getOneBy(req.params.id)});
        }
    },

    // Cart products
    getCart: (req,res)=> {res.render("products/productCart.ejs")},
    
};

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