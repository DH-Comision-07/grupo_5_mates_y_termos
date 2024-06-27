const fs = require('fs');
const path = require ("path");
const { check } = require('express-validator');

const db = require ("../database/models");
const Op = db.Sequelize.Op;

const validateRegister = [
    check('name')
        .notEmpty().withMessage('Debes completar el nombre').bail()
        .isLength({ min: 3 }).withMessage('El nombre debe ser más largo'),
        
    check('lastName')
        .notEmpty().withMessage('Debes completar el apellido').bail()
        .isLength({ min: 5 }).withMessage('El nombre debe ser más largo'),

    check('userEmail')
        .notEmpty().withMessage('Debes completar el email').bail()
        .isEmail().withMessage('Debes completar un email válido')
        .custom(async (valueEmail) => {
            let usuarioEncontrado = await db.Usuarios.findOne({ where: { email: valueEmail } });
            if (usuarioEncontrado) {
                throw new Error("Mail ya registrado...");
            }
            return true;
        }
    ),

    check('passwordUser')
        .notEmpty().withMessage('Debes completar la contraseña').bail()
        .isLength({ min: 6 }).withMessage('La contraseña debe ser más larga'),

    check ("confirmPassword")
        .notEmpty().withMessage('Debes repetir la contraseña').bail()
        .custom((valuePassword, {req}) => {
            if (valuePassword !== req.body.passwordUser) {
                throw new Error('Las contraseñas no coinciden');
            }
            return true;
            }
        ),
]

module.exports = validateRegister;

