const db = require("../database/index")

exports.createUser = async (req, res) => {
    try {
        const {nome, cpf, email, senha, img} = req.body;

        await db.query(`insert into Usuarios (nome, cpf, email, senha, img) values('${nome}', ${cpf}, '${email}', '${senha}', '${img}')`)

        res.send({
            message: 'Dados Inseridos!'
        })
    } catch (error) {
        res.send({
            message: 'Não foi possível inserir os dados', 
            error
        })
    }
}

exports.findUser = async (req, res) => {
    try {
        const result = await db.query('select * from Usuarios')

        res.send({
            message: 'Usuarios encontrados com sucesso!',
            usuarios: result.rows
        })
        
    } catch (error) {
        res.send({
            message: 'Não foi possível encontrar os dados',
            error
        })
    }
}

exports.loginUser = async (req, res) => {
    try {
        const {email, senha} = req.body;
        const result = await db.query(`select * from Usuarios where email = '${email}' and senha = '${senha}'`);

        if(result.rows.length == 0){
            return res.status(404).send({
                message: 'Não foi possível encontrar o usuario'
            })
        }

        res.send({
            message: 'Login feito com sucesso!',
            usuarios: result.rows
        })
        
    } catch (error) {
        res.send({
            message: 'Não foi possível encontrar os dados',
            error
        })
    }
}