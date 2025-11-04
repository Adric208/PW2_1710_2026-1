const express = require('express');
const app = express();
const PORT = 150;
app.get('/', (req, res) => {
  res.send('Servidor activo');
});
app.listen(PORT, () => {
  console.log(`En web http://localhost:${PORT}`);
});