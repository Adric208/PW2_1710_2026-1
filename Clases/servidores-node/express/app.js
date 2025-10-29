// Servidor con Express
const express = require('express');
const app = express();
const PORT = 2026;

app.get('/', (req, res) => {
  res.type('text/plain; charset=utf-8');
  res.send('Hola desde el servidor express');
});

app.listen(PORT, () => {
  console.log(`Servidor Express corriendo en http://localhost:${PORT}`);
});
