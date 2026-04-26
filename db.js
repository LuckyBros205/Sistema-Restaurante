// Agregamos /promise al final
const mysql = require('mysql2/promise'); 
require('dotenv').config();

const db = mysql.createPool({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    port: process.env.DB_PORT, // Asegúrate que sea 3306 para local
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0,
    ssl: process.env.DB_HOST === 'localhost' ? false : { rejectUnauthorized: false }
});

console.log('Pool de conexiones (Promesas) configurado para: ' + process.env.DB_HOST);

module.exports = db;