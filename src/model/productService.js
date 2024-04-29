const fs = require('fs');
const path = require ("path");

let parseProducts = require ("../model/products.json");
const productsFilePath = path.join(__dirname, '../model/products.json');

let productService = {

    products: parseProducts,

    getAll: function (){
        return this.products;
    },

    locationProduct: function (id) {
        return this.products.findIndex(product => product.id == id);
    },

    getOneBy: function (id) {
        return this.products.find(product => product.id == id);
    }
};

module.exports=productService