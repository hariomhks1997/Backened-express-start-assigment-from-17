<<<<<<< HEAD
const mysql = require('mysql2');

const pool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    database: 'world',
    password: '1234567'
});

module.exports = pool.promise();
=======
const Sequelize = require('sequelize');

const sequelize = new Sequelize('node-complete', 'root', 'nodecomplete', {
  dialect: 'mysql',
  host: 'localhost'
});

module.exports = sequelize;
>>>>>>> 43456b9 (17 Making SQL easy with Sequelize)
