console.log('Ola, mundo!');

const mysql = require('mysql');

// Configurações de conexão
const connection = mysql.createConnection({
  host: 'localhost',  // Endereço do servidor do banco de dados
  user: 'seu_usuario', // Nome de usuário do banco de dados
  password: 'sua_senha', // Senha do banco de dados
  database: 'seu_banco_de_dados' // Nome do banco de dados
});

// Conectando ao banco de dados
connection.connect((err) => {
  if (err) {
    console.error('Erro ao conectar ao banco de dados:', err.stack);
    return;
  }

  console.log('Conectado ao banco de dados como ID ' + connection.threadId);
});

// Exemplo de consulta
connection.query('SELECT * FROM tabela_exemplo', (error, results, fields) => {
  if (error) throw error;
  console.log('Resultados da consulta:', results);
});

// Encerrar conexão
connection.end();