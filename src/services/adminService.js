const fs = require('fs');
const path = require ("path");

const db = require ("../database/models");
const Op = db.Sequelize.Op;

let adminService = {
    getAll: async () => {
        try {
            const categorias = await db.Categorias.findAll()
            const colores = await db.Colores.findAll()
            return {categorias, colores}
        } catch (error) {
            console.error('Erro en Categorias y/o Colores:', error);
            res.status(500).send('Internal Server Error');
        }
    },
    
    createProduct: async function(newProduct, newImage){
        try {
            let product = new Producto(newProduct);

            let addProduct = await db.Productos.create(product, {include:[{association: "producto"},{association: "colores"},{association: "categorias"}]})
            
            const imagePromises = newImage.map(file => {
                return db.Images.create({ name: file.filename, product_id: addProduct.id });
            });
            await Promise.all(imagePromises);
            return addProduct.dataValues
        } catch (error) {
            console.error('Error en Creacion Producto:', error);
            res.status(500).send('Internal Server Error');
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

function Producto({name, description, price, stock, categorias, colores,}){
    this.name = name;
    this.description = description;
    this.price = price;
    this.stock = stock;
    this.category_id = categorias;
    this.color_id = colores;
    
};
function Imagenes({name,productosId}){
    this.name= name;
    this.product_id = productosId;
};

module.exports = adminService;