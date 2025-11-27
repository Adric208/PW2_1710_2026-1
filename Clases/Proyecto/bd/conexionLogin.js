const mysql = require('mysql2');

const loginDB = mysql.createConnection({
    host: process.env.LOGIN_HOST,
    user: process.env.LOGIN_USER,
    password: process.env.LOGIN_PASSWORD,
    database: process.env.LOGIN_DATABASE,
    port: process.env.LOGIN_PORT
});

loginDB.connect(err => {
    if (err) {
        console.log("Fallo en BDLogin, checa porque no hay conexión:", err);
    } else {
        console.log("Si hay conexión en BD Login");
    }
});

module.exports = loginDB;
