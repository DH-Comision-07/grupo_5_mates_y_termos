const fs = require('fs');
const path = require ("path");

const db = require ("../database/models");
const Op = db.Sequelize.Op;

let adminService = {
    getAll: async () => {
        try {
            const categorias = await db.Categorias.findAll();
            const colores = await db.Colores.findAll();
            return {categorias, colores};
        } catch (error) {
            console.error('Erro en Categorias y/o Colores:', error);
            res.status(500).send('Internal Server Error');
        }
    },
    getAdmin: function (orderBy, orderDirection){
        return new Promise((resolve, reject) => {
            let orderOption = [];

            if (orderBy === 'categoria') {
                orderOption = [[{ model: db.Categorias, as: 'categorias' }, 'name',  orderDirection]];
            } else if (orderBy === 'id') {
                orderOption = [['id',  orderDirection]];

            } else if (orderBy === 'nombre') {
                orderOption = [['name',  orderDirection]];

            } else if (orderBy === 'precio') {
                orderOption = [['price', orderDirection]];
            
             } else if (orderBy === 'stock') {
                orderOption = [['stock',  orderDirection]];
            };

            return db.Productos.findAll({
                include: [
                    { association: "producto" },
                    { association: "colores" },
                    { association: "categorias" },
                    { association: "usuarios" }
                ],
                order: orderOption // ordena segun el resultado de la variable ordenOption
            })      
            .then(productos => { //en productos entra la promesa
                resolve(productos)
            })
            .catch (err => {
                console.log(err);
                reject ([])
            });
        })
    },

    createProduct: async function(newProduct, newImage){
        try {
            let product = new Producto(newProduct);

            let addProduct = await db.Productos.create(product, {
                include:[
                    {association: "producto"},
                    {association: "colores"},
                    {association: "categorias"},
                    {association: "usuarios"}]
                })
            
            const imagePromises = newImage.map(file => {
                return db.Images.create({ 
                    name: file.filename, 
                    product_id: addProduct.id});
            });
            await Promise.all(imagePromises);
            return addProduct.dataValues
        } catch (error) {
            console.error('Error en Creacion Producto:', error);
            res.status(500).send('Internal Server Error');
        } 
    },
    getOneBy: async function (id) {
        try {
            const producto = await db.Productos.findByPk(id, {
                include: [
                    { association: "producto" },
                    { association: "colores" },
                    { association: "categorias" },
                    { association: "usuarios" }
                ]
            });
    
            if (!producto) {
                return {
                    id: 0,
                    name: "Producto No Encontrado"
                };
            }
    
            return producto;
        } catch (error) {
            console.log(error);
            return {
                id: 0,
                name: "Producto No Encontrado"
            };
        }
    },

    updateBy: async function (body, id){
        try {
            let producto = new Producto(body);
            await db.Productos.update(producto, {where: {id: id}});
        } catch (error) {
            console.error('Error en Modificacion Producto:', error);
            res.status(500).send('Internal Server Error');
        }
    },

    destroy:  async function (params) {
        try {
            return await db.Productos.destroy({
                where: {id: params.id} 
            });
        } catch (error) {
            console.error('Error en Eliminacion Producto:', error);
            res.status(500).send('Internal Server Error');
        } 
    }
};

function Producto({name, description, price, discount, discount_price, stock, categorias, colores,}){
    this.name = name;
    this.description = description;
    this.price = price;
    this.discount = discount;
    this.discount_price = price * discount_price;
    this.stock = stock;
    this.category_id = categorias;
    this.color_id = colores;
    
};
function Imagenes({name,productosId}){
    this.name= name;
    this.product_id = productosId;
};

module.exports = adminService;
