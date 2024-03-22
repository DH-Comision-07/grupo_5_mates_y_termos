const fs = require('fs');
const path = require ("path");


/* el require se encarga de realizar el parce
JSON.parse(fs.readFileSync(productsFilePath, 'utf-8')),
const path = require('path');
const productsFilePath = path.join(__dirname, '../models/productsDataBase.json');
const toThousand = n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, "."); */
let parseProducts = require ("./products.json");
const productsFilePath = path.join(__dirname, '../model/products.json');

let productService = {

    products: parseProducts,

    getAll: function (){
        return this.products;
    },

    getOneBy: function (id) {
        return this.products.find(product => product.id == id);
    },

    save: function(product) {
        this.products.push(product);
        fs.writeFileSync(path.resolve(__dirname, "../data/productsDataBase.json"), JSON.stringify(this.products));
    }

}

module.exports=productService