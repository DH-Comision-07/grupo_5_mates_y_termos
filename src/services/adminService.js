const fs = require('fs');
const path = require ("path");

const db = require ("../database/models");
const Op = db.Sequelize.Op;

let adminService = {

    create: async function (body, file) {
        try {
            return await db.Productos.create({
                name: body.name, 
                price: body.price, 
                discount: body.discount,
                stock: body.stock,            
                description: body.description,
                image: file.filename,
                category: body.category
            }) //esta es la promesa
        } catch (error) {
            console.log(error)
        }
    },
    update: async function (body,/* file */ params) {
            try {
                return await db.Productos.update({
                    name: body.name, 
                    price: body.price, 
                    discount: body.discount,
                    stock: body.stock,            
                    description: body.description,
                    /* image: file.filename, */
                    category: body.category
                }, {where: {id: params.id} 
                }) //esta es la promesa
            } 
            catch (error) {
                console.log(error)
            }
    },

    destroy:  async function (params) {
        try {
            return await db.Productos.destroy({
                where: {id: params.id} 
            });
        } catch (error) {
            console.log(error);
        } 
    }
};

function Producto({name, price, discount, stock, description, image, category}){
    this.name = name;
    this.price = price;
    this.discount = discount;
    this.stock = stock;
    this.description = description;
    this.image = image;
    this.category = category;
};

module.exports = adminService;