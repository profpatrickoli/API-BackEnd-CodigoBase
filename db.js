// npm i mysql2
var mysql = require('mysql2/promise'); 

// Create a connection pool
var pool = mysql.createPool({
    host: '127.0.0.1',
    port: 3306,
    user: 'root',
    password: '',
    database: 'nome_do_seu_bd', // ** EDITAR O NOME DO SEU BANCO DE DADOS AQUI! **
});

module.exports = Object.freeze({
  pool: pool
});