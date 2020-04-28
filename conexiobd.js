var mysql = require('mysql');

var connection = mysql.createConnection({
  host     : 'localhost',
  port     : '3306',
  user     : 'root',
  password : '36170287Qq',
  database : 'vetapp'
});

module.exports = connection;
connection.connect();