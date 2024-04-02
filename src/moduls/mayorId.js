const fs = require('fs');
const path = require ("path");

const parseProducts = require ("../model/products.json");

let idMayor ={
    maxId: function mayorId(){ 
        const max = Math.max.apply(Math, parseProducts.map(function (idMax) {return idMax.id;}));
        return max;
    }
}
module.exports = idMayor;