const fs = require('fs');
const path = require ("path");
const { check } = require('express-validator');

/* const usersFilePath = path.join(__dirname, '../model/users.json');
const archivoUsuarios = JSON.parse(fs.readFileSync(usersFilePath)); */

const validCreateProduct = [
    check('name')
        .notEmpty().withMessage('Debes completar el nombre')
        .isLength({ min: 2 }).withMessage('El nombre debe ser más largo'),
        
    check('description')
        .notEmpty().withMessage('Debes completar descripció').bail()
        .isLength({ min: 6 }).withMessage('La descripcion debe ser más larga'),

    check('price')
        .notEmpty().withMessage('Debes completar la precio'),
    
    check('colores')
        .notEmpty().withMessage('Debes cseleccionar color'),

    check('stock')
        .notEmpty().withMessage('Debes completar stock'),
    
    check('categorias')
        .notEmpty().withMessage('Debes completar la categoría'),

 
]

module.exports = validCreateProduct;