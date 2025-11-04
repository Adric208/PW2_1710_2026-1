const express = require('express');
const pageRoutes = require("./routes/Pages");

const app = express();
app.use('/',pageRoutes);

app.use(express.static('public'));

app.get('/',(req,res)=>{
    res.redirect('/page1');
});
const port = 100;
app.listen(port, () => {
    console.log(`Servidor http://localhost:${port}`);
});