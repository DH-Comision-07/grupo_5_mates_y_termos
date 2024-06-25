const db = require ("../database/models");
const Op = db.Sequelize.Op;

let homeService = { 
    getAll: function (){
        return new Promise((resolve, reject) => {
            db.Productos.findAll({include:[{association: "producto"},{association: "categorias"}],
               /* where:{stock: {[Op.gte]:15},//stock mayor o igual a 15
                name: { [Op.regexp]: '^mate'}}, //sin tener en cuenta mayuscula o minuscula busca palabra
                limit: 6, //limita a mostrar 6 productos
                order: [['name', 'ASC']]// ordena por nombre */
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

}
        
module.exports = homeService;