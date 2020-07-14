const db = require("../database/index")

exports.createUser = async (req, res) => {
    try {
        const {nome, cpf, email, senha, img} = req.body;

        await db.query(`insert into Usuarios (nome, cpf, email, senha, img, ativo, admin)
         values('${nome}', ${cpf}, '${email}', '${senha}', '${img}', 'true', 'false')`)

        const result = await db.query(`select * from Usuarios where cpf='${cpf}'`)

        res.send({
            message: 'Dados Inseridos!',
            usuarios: result.rows
        })
    } catch (error) {
        res.status(400).send({
            message: 'Não foi possível inserir os dados', 
            error
        })
    }
}

exports.findUser = async (req, res) => {
    try {
        const result = await db.query('select * from Usuarios where admin=false')

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

exports.updateUser = async (req, res) => {
    try {
        const {nome, cpf, email, id} = req.body;

        await db.query(`update Usuarios set nome='${nome}', cpf=${cpf}, email='${email}' where id=${id}`)

        const result = await db.query(`select * from Usuarios where id=${id}`)

        res.send({
            message: 'Dados Atualizados!',
            usuarios: result.rows
        })
    } catch (error) {
        res.send({
            message: 'Não foi possível atualizar os dados', 
            error
        })
    }
}