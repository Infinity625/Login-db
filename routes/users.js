const express = require('express');
const router = express.Router();

/* Rota Get */
router.get('/', function(req,res, next){
    res.send('respondendo com o recurso')
})

module.exports = router;