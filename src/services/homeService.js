const db = require ("../database/models");
const Op = db.Sequelize.Op;

let homeService = { 
    getAll: function (){
        return new Promise((resolve, reject) => {
            const discountNo = db.Productos.findAll({
                include:[{association: "producto"},{association: "categorias"}],
               where:{discount: {[Op.eq]:0}} //Igual a 0
                /* name: { [Op.regexp]: '^mate'}}, //sin tener en cuenta mayuscula o minuscula busca palabra
                limit: 6, //limita a mostrar 6 productos
                order: [['name', 'ASC']]// ordena por nombre */
            });
            const discountYes = db.Productos.findAll({
                include:[{association: "producto"},{association: "categorias"}],
                where:{discount: {[Op.ne]:0}}//distinto a 0
             });

             Promise.all([discountNo, discountYes])
                .then(productos => {
                    const [discountNo, discountYes] = productos;
                    resolve({discountNo, discountYes});
                })

                .catch (err => {
                    console.log(err);
                    reject ([])
                });
        })
    }
}
        
module.exports = homeService;