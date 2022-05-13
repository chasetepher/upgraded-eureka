const mysql = require('mysql2');

const database = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'bovines',
  port: 3306
});

connection.connect((err) => {
  if (err) {
    console.log(err);
  } else {
    console.log('Connected to MySQL!')
  }
});

// Your Database Queries Here!!





// Don't forget to export your functions!
module.exports = database;