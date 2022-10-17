const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello it is me!')
})


const mysql      = require('mysql');
const connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : 'Pooh(*)!123',
  database : 'jeheo_server'
});

connection.connect();

connection.query('SELECT * from userinfo', (error, rows, fields) => {
  if (error) throw error;
  console.log('User info is: ', rows);
});

connection.end();
