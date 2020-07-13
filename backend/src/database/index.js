const {Pool} = require("pg")

const conection = new Pool({
    user: 'postgres',
    database: 'mind',
    port: 5432,
    password: 'postgres',
    host: 'localhost'
})

conection.on('connect', () => console.log('conexao feita com sucesso'))

module.exports = conection;