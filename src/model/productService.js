const fs = require('fs');
const path = require ("path");

let parseProducts = require ("../model/products.json");
const productsFilePath = path.join(__dirname, '../model/products.json');

let idMayor = require("../moduls/mayorId");

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
    },
    createProduct: function (id, body, files){
        id = idMayor.maxId() + 1;
        const {name, description, price, category, colors, stock} = body;
        const fileName = (files).map(file => file.filename);
        const images = fileName;
        const productAdd = {id, name, description, price, images, category, colors, stock, };
        this.save(productAdd);
    },

    updateProduct: function(id,body) {
        id = this.locationProduct(id);
        const {name, description, price, category, colors, stock, images} = body;

        // Actualizar los datos del producto
       if (name) {
            parseProducts[id].name = name;
        }
        if (price) {
            parseProducts[id].price = price;
        }
        if (category) {
            parseProducts[id].category = category;
        }
        if (colors) {
            parseProducts[id].colors = colors;
        }
        if (category) {
            parseProducts[id].category = category;
        }
        if (description) {
            parseProducts[id].description = description;
        }
        if (stock) {
            parseProducts[id].stock = stock;
        }
        if (images) {
            parseProducts[id].images = images;
        }
        fs.writeFileSync(productsFilePath, JSON.stringify(parseProducts));    
    },

    deleteProduct: function (id){
        const idRemove = id;
        newJson = parseProducts.filter (idrem => (idrem.id).toString() !== idRemove);
        const newDataJson = JSON.stringify(newJson);
        fs.writeFileSync(productsFilePath, newDataJson)
    }
}
module.exports=productService