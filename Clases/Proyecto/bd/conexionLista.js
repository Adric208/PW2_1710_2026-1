const mysql = require('mysql2');

const listaDB = mysql.createConnection({
    host: process.env.LIST_HOST,
    user: process.env.LIST_USER,
    password: process.env.LIST_PASSWORD,
    database: process.env.LIST_DATABASE,
    port: process.env.LIST_PORT
});

listaDB.connect(err => {
    if (err) {
        console.log("Fallo en BD lista, checa porque no hay conexión:", err);
    } else {
        console.log("Si hay conexión a la BD lista");
    }
});

module.exports = listaDB;
