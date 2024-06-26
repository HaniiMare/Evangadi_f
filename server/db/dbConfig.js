const mysql = require('mysql2');
var dbConnection = mysql.createPool({
  user: process.env.USER,
  database: process.env.DATABASE,
  host: process.env.HOST,
  password: process.env.PASSWORD,
  connectionLimit: 10
});

module.exports = dbConnection.promise();