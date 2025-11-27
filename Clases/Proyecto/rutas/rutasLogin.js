const express = require('express');
const router = express.Router();
const loginDB = require('../bd/conexionLogin');

// Mostrar login
router.get('/login', (req, res) => {
    res.render('login', { error: null });
});

// Procesar login
router.post('/login', (req, res) => {
    const { usuario, password } = req.body;

    loginDB.query(
        "SELECT * FROM user WHERE username = ? AND password = ?",
        [usuario, password],
        (err, resultados) => {
            if (err) throw err;

            if (resultados.length > 0) {
                req.session.usuario = usuario;
                res.redirect('/lista');
            } else {
                res.render('login', { error: 'Usuario o contraseña incorrectos' });
            }
        }
    );
});

// Formulario para crear nuevo usuario
router.get('/adduser', (req, res) => {
    res.render('adduser', { error: null });
});

// Guardar nuevo usuario
router.post('/adduser', (req, res) => {
    const { usuario, password } = req.body;

    loginDB.query(
        "INSERT INTO user (username, password) VALUES (?, ?)",
        [usuario, password],
        (err) => {
            if (err) {
                if (err.code === 'ER_DUP_ENTRY') {
                    return res.render('adduser', {
                        error: 'Ese usuario ya existe, elige otro.'
                    });
                }
                throw err;
            }

            res.redirect('/login');
        }
    );
});

// Cerrar sesión
router.get('/logout', (req, res) => {
    req.session.destroy(() => {
        res.redirect('/login');
    });
});

module.exports = router;
