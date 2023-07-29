const express = require ('express');
const app = express();
const path = require ('path');
 
app.listen(3030, ()=> console.log('corriendo, link http://localhost:3030'));
app.use(express.static('public'));

let htmlpath = path.join(__dirname, '/views/home.html');

app.get('/', (req,res)=> {
    res.sendFile(htmlpath)
});
