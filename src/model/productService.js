const fs = require('fs');
const path = require ("path");

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
    
    locationProduct: function (id) {
        return this.products.findIndex(product => product.id == id);
    },

    save: function(product) {
        this.products.push(product);
        fs.writeFileSync(productsFilePath, JSON.stringify(this.products));
    }
}
module.exports=productService