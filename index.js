const express = require('express')
const app = express()
const port = 3000
const mysql      = require('mysql');


app.get('/', (req, res) => {
  
  const connection = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : '0000',
    database : 'jeheo_server'
  });
  connection.connect();
  
  connection.query('SELECT * from userinfo', (error, rows, fields) => {
    if (error) throw error;
    res.status(200).send(rows);
    console.log('User info is: ', rows);
    connection.end();
  });
  
});
app.get('/insert', (req, res) => {
  
  const connection = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : '0000',
    database : 'jeheo_server'
  });
  connection.connect();
  
  connection.query('insert * from userinfo', (error, rows, fields) => {
    if (error) throw error;
    res.send(rows);
    console.log('User info is: ', rows);
    connection.end();
  });
  
});
app.listen(3000, () => console.log('Example app listening on port 3000!'));

