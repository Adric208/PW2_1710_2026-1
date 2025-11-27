const express = require('express');
const router = express.Router();
const listaDB = require('../bd/conexionLista');
// Verifica si el usuario tiene sesión activa
function verificarSesion(req, res, next) {
    if (req.session.usuario) return next();
    res.redirect('/login');
}
// Muestra todos los registros ordenados por ID
router.get('/lista', verificarSesion, (req, res) => {
    listaDB.query("SELECT * FROM list ORDER BY id", (err, datos) => {
        if (err) throw err;
        res.render('lista', { registros: datos });
    });
});
// Valida campos y agrega un registro nuevo
router.post('/agregar', verificarSesion, (req, res) => {

    const { id, nombre, ocupacion, edad, promedio } = req.body;

    // Evita que el usuario ponga numeros negativos ya que no se pueden colocar
    if (id < 0) {
        return res.send(`<script>alert("El ID no puede ser negativo."); window.location.href="/lista";</script>`);
    }
    if (edad < 0) {
        return res.send(`<script>alert("La edad no puede ser negativa."); window.location.href="/lista";</script>`);
    }
    if (promedio < 0) {
        return res.send(`<script>alert("El promedio no puede ser negativo."); window.location.href="/lista";</script>`);
    }
    if (promedio > 10) {
        return res.send(`<script>alert("El promedio no puede ser mayor a 10."); window.location.href="/lista";</script>`);
    }

    const sql = "INSERT INTO list (id, nombre, ocupacion, edad, promedio) VALUES (?, ?, ?, ?, ?)";

    // Inserta datos en la tabla
    listaDB.query(sql, [id, nombre, ocupacion, edad, promedio], (err) => {

        // Detecta ID duplicado
        if (err) {
            if (err.code === "ER_DUP_ENTRY") {
                return res.send(`<script>alert("El ID ya existe. No puede duplicarse."); window.location.href="/lista";</script>`);
            }
            throw err;
        }

        res.redirect('/lista');
    });
});


// Cambia los valores del ID
router.post('/editar/:id', verificarSesion, (req, res) => {

    const idViejo = req.params.id;
    const { id, nombre, ocupacion, edad, promedio } = req.body;

    // --- VALIDACIONES ---
    if (id < 0) {
        return res.status(400).json({ error: "El ID no puede ser negativo" });
    }
    if (edad < 0) {
        return res.status(400).json({ error: "La edad no puede ser negativa" });
    }
    if (promedio < 0) {
        return res.status(400).json({ error: "El promedio no puede ser negativo" });
    }
    if (promedio > 10) {
        return res.status(400).json({ error: "El promedio no puede ser mayor a 10" });
    }

    const sql = `
        UPDATE list 
        SET id = ?, nombre = ?, ocupacion = ?, edad = ?, promedio = ?
        WHERE id = ?
    `;

    // Ejecuta actualización
    listaDB.query(sql, [id, nombre, ocupacion, edad, promedio, idViejo], (err) => {

        // Detecta ID duplicado
        if (err) {
            if (err.code === "ER_DUP_ENTRY") {
                return res.status(400).json({ error: "ID duplicado" });
            }
            throw err;
        }

        res.json({ ok: true });
    });
});



// ===============================
// Elimina un registro por ID
router.get('/eliminar/:id', verificarSesion, (req, res) => {

    const { id } = req.params;

    listaDB.query("DELETE FROM list WHERE id = ?", [id], (err) => {
        if (err) throw err;
        res.redirect('/lista');
    });
});


module.exports = router;
