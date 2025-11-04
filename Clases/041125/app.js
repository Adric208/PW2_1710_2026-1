const express = require('express');
const app = express();
const pageRouters = require('./routes/Pages');

const path = require('path');
app.use('/', pageRouters);
app.get('/', (req, res) => {
  res.redirect('/page1');
});

const PORT = 150;


app.listen(PORT, () => {
  console.log(`En web http://localhost:${PORT}`);
});