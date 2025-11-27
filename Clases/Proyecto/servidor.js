require('dotenv').config();
const express = require('express');
const session = require('express-session');
const path = require('path');

const rutasLogin = require('./rutas/rutasLogin');
const rutasLista = require('./rutas/rutasLista');

const app = express();
const PUERTO = 3000;

// Para vistas
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'vistas'));

// Archivos fijos o estaticos
app.use(express.static(path.join(__dirname, 'publico')));

// Para leer formularios y JSON 
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Guardar sesion
app.use(session({
    secret: 'F93jsd8!asD92-_ASD923asd',
    resave: false,
    saveUninitialized: false
}));

// Rutas
app.use('/', rutasLogin);
app.use('/', rutasLista);

// Ruta base
app.get('/', (req, res) => {
    res.redirect('/login');
});

// Iniciar servidor
app.listen(PUERTO, () => {
    console.log(`Servidor activo http://localhost:${PUERTO}`);
    console.log(`Login:  http://localhost:${PUERTO}/login`);
    console.log(`Lista:  http://localhost:${PUERTO}/lista (requiere login)`);
});
