const db = require ("../database/models");
const Op = db.Sequelize.Op;

let productsService = { 
    getProducts: function (categoriaSeleccionada, precioMin, precioMax) {
        return new Promise((resolve, reject) => {
            let whereCondition = {};

            if (categoriaSeleccionada) {
                whereCondition['$categorias.name$'] = categoriaSeleccionada;
            }
            if (precioMin) {
                whereCondition.discount_price = { ...whereCondition.discount_price, [db.Sequelize.Op.gte]: precioMin };
            }
            if (precioMax) {
                whereCondition.discount_price = { ...whereCondition.discount_price, [db.Sequelize.Op.lte]: precioMax };
            }
            db.Productos.findAll({
                include: [
                    {association: "producto"},
                    {association: "colores"},
                    {association: "categorias"},
                    {association: "usuarios"}
                ],
                where: whereCondition,
                order: [['name', 'ASC']] // Ordenar por nombre ascendente por defecto
            })
            .then(productos => {
                resolve(productos);
            })
            .catch(err => {
                console.log(err);
                reject([]);
            });
        });
    },

    getAll: function (){
        return new Promise((resolve, reject) => {
            db.Productos.findAll({include:[
                {association: "producto"}
            ]})            
            .then(productos => { //en productos entra la promesa
                resolve(productos)
            })
            .catch (err => {
                console.log(err);
                reject ([])
            });
        })
    },
    getAllOffer: function (){
        return new Promise((resolve, reject) => {
            db.Productos.findAll({include:[
                {association: "producto"}],
                where:{discount: {[Op.ne]:0}} //distinto de 0
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

    getOneBy: async function (id) {
        try {
            return await db.Productos.findByPk(id,{include:[
                {association: "producto"},
                {association: "colores"},
                {association: "categorias"},
                {association: "usuarios"}
            ]}); //esta es la promesa
        } catch (error) {
            console.log(error)
            return {
                id: 0,
                name: "Producto No Encontrado",
                price: 0,
                offer: "NO",
                discount: 0,
                stock: 0,
                description: "",
                image: "",
                category: "",
                release_date: ""
            }  
        }
    },

    getRelated: function () {
        return db.Productos.findAll({
            include:[{association: "producto"},{association: "categorias"}]
        });
    },
    /* Muestro productos relacionados por categoria
        getRelated: function (categoryId, productId) {
        return db.Productos.findAll({
            include:[{association: "producto"},{association: "categorias"}],
                where: {
                category_id: categoryId,
                id: { [Op.ne]: productId }
            },
            limit: 4 // Limita el número de productos relacionados a mostrar
        });
    } */
}
        
module.exports = productsService; 