const fs = require('fs');
const path = require ("path");
const { check } = require('express-validator');
const bcrypt = require ("bcryptjs");

const db = require ("../database/models");
const Op = db.Sequelize.Op;

const validateUser = [
    check('userEmail')
        .isEmail().withMessage('Debes completar un email válido')
        // Evalúa si el email ingresado está registrado
        .custom(async (valueEmail) => {
            let usuarioEncontrado = await db.Usuarios.findOne({ where: { email: valueEmail } });
            if (!usuarioEncontrado) {
                throw new Error("Usuario no se encuentra registrado...");
            }
            return true;
        }),

    check('passwordUser')
        .notEmpty().withMessage('Debes completar la contraseña')
        // Valida si la contraseña ingresada es igual a la hasheada
        .custom(async (passwordValided, { req }) => {
            let usuarioEncontrado = await db.Usuarios.findOne({ where: { email: req.body.userEmail } });
            if (!usuarioEncontrado || !bcrypt.compareSync(passwordValided, usuarioEncontrado.password)) {
                throw new Error("Contraseña incorrecta o usuario inexistente");
            }
            return true;
        }),
];

module.exports = validateUser;