const fs = require('fs');
const path = require ("path");
const { check } = require('express-validator');

/* const usersFilePath = path.join(__dirname, '../model/users.json');
const archivoUsuarios = JSON.parse(fs.readFileSync(usersFilePath)); */

const validCreateProduct = [
    check('name')
        .notEmpty().withMessage('Debes completar el nombre').bail()
        .isLength({ min: 3 }).withMessage('El nombre debe ser mayor a tres caracteres'),
        
    check('description')
        .notEmpty().withMessage('Debes completar descripción').bail()
        .isLength({ min: 6 }).withMessage('La descripcion debe ser mayor a seis caracteres'),

    check('price')
        .notEmpty().withMessage('Debes completar el precio'),
    
    check('colores')
        .notEmpty().withMessage('Debes seleccionar un color'),

    check('stock')
        .notEmpty().withMessage('Debes completar stock'),
    
    check('categorias')
        .notEmpty().withMessage('Debes seleccionar una categoría'),
]

module.exports = validCreateProduct;