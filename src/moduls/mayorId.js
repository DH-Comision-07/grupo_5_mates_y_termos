const fs = require('fs');
const path = require ("path");

const parseProducts = require ("../model/products.json");
const parseUsers = require ("../model/users.json");

let idMayor ={
    idMayorProduct: function mayorId(){ 
        const max = Math.max.apply(Math, parseProducts.map(function (idMax) {return idMax.id;}));
        return max;
    },
    idMayorUsers: function mayorId(){ 
        const max = Math.max.apply(Math, parseUsers.map(function (idMax) {return idMax.id;}));
        return max;
}

}
module.exports = idMayor;