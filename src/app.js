const express = require ('express');
const app = express();
const path = require ('path');

app.use(express.static('../public'));
app.set('view engine', 'ejs');
app.set("views", path.join(__dirname, "views"));

//ROUTES.............................
const routerhome = require('./routes/home');
 
//RUTAS.............................
app.use('/', routerhome);


//SERVIDOR.........................
app.listen(3030, ()=> console.log('corriendo, link http://localhost:3030'));



/*let htmlpath = path.join(__dirname, '/views/home.html');
app.get('/', (req,res)=> {
    res.sendFile(htmlpath)
});

let htmlcont = path.join(__dirname, '/views/contacto.html');
app.get('/contacto', (req, res)=> {
    res.sendFile(htmlcont)
});*/