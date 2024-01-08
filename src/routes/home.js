const express = require('express');
const router = express.Router();

router.get('/', (req, res)=>{
    res.render('home')
});
router.get('/miperfil', (req, res)=>{
    res.render('miperfil')
});
router.get('/servicios', (req, res)=> {
    res.render('servicios')
})
router.get('/contacto', (req, res)=>{
    res.render('contacto')
});

module.exports = router;