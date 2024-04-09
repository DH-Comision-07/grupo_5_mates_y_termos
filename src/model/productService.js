const fs = require('fs');
const path = require ("path");

let parseProducts = require ("../model/products.json");
const productsFilePath = path.join(__dirname, '../model/products.json');

let productService = {

    products: parseProducts,

    getAll: function (){
        return this.products;
    },

    getOneBy: function (id) {
        return this.products.find(product => product.id == id);
    }
};

module.exports=productService