const fs = require('fs');
const path = require('path');

const productService = require ('../model/productService')

const parseProducts = require ("../model/products.json");
const productsFilePath = path.join(__dirname, '../model/products.json');

const productsController = { 

    // All products
    index: (req, res) => {
         res.render("products/productAll.ejs", {products : productService.getAll( )});
    },  

    // Detail products
    detail: (req, res) => {res.render("products/productDetail.ejs" , {product: productService.getOneBy(req.params.id)});
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