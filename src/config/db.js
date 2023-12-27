// db.js
import mysql from 'mysql2';
import dotenv from 'dotenv';
dotenv.config();

const connection = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME
});

connection.connect((err) => {
    if (err) {
        console.error('Erro ao conectar ao banco de dados:', err.message); // Adicionado .message
        throw err; // Removido o lançamento de uma exceção genérica
    }
    console.log("Conexão bem sucedida!");
});




export default connection;
