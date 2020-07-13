const express = require('express');
const controller = require('../controller/userController');

const router = express.Router();

router.get('',(req, res)=> {
    res.send({
        message:'Seja Bem-vindo ao meu case da Mind'
    })
})

router.post('/criarUsuario', controller.createUser)

router.get('/verUsuarios', controller.findUser)

router.post('/loginUsuario', controller.loginUser)

module.exports = router;