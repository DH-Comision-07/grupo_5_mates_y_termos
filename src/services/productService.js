const db = require ("../database/models");
const Op = db.Sequelize.Op;

let productsService = { 
    getAll: function (){
        return new Promise((resolve, reject) => {
            db.Productos.findAll({include:[{association: "producto"}]})            
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
            return await db.Productos.findByPk(id,{include:[{association: "producto"},{association: "colores"},{association: "categorias"}]}); //esta es la promesa
        } catch (error) {
            console.log(error)
            return {
                id: 0,
                name: "Producto No Encontrado",
                price: 0,
                discount: 0,
                stock: 0,
                description: "",
                image: "",
                category: "",
                release_date: ""
            }  
        }
    }  

    /* getOneBy: function (id){
        return new Promise((resolve, reject) => {
            db.Productos.findByPk(id) //esta es la promesa
            .then((productos) => { //en productos entra la promesa
                resolve(productos);
            })
            .catch(err => {
                console.log(err);
                reject ([])
            });
        })
    }   */
}
        
module.exports = productsService;