const express = require('express')
const mysql = require('mysql');
const app = express()

app.use(express.json())
app.use(express.urlencoded({extende: true}))

app.get('/member', (req, res) => {
  const connection = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : '0000',
    database : 'jeheo_server'
  });

  connection.connect();
  connection.query('SELECT * from userinfo', (error, rows, fields) => {
    if (error) {
      res.status(500).send(error);
    } else {
      res.status(200).send(rows);
      console.log('User info is: ', rows);
    }
    connection.end();
  });
});

app.post('/member', (req, res) => {
  let userData = req.body;
  let query = `INSERT INTO USERINFO (ID, PW, NAME, AGE) VALUES ('${userData.id}','${userData.pw}','${userData.name}',${userData.age})`
  console.log("user insert query :", query);

  const connection = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : '0000',
    database : 'jeheo_server'
  });
  connection.connect();
  connection.query(query, (error, rows, fields) => {
    if (error) throw error;
    res.send(rows);
    console.log('User info is: ', rows);
    connection.end();
  });
});

app.patch('/member/:id', (req, res) => {
  let id = req.params.id;
  let userData = req.body;
  let query = `UPDATE USERINFO SET name = '${userData.name}', pw = '${userData.pw}', age = ${userData.age} where id = '${id}'`
  console.log("user insert query :", query);

  const connection = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : '0000',
    database : 'jeheo_server'
  });

  connection.connect();
  connection.query(query, (error, rows, fields) => {
    if (error) throw error;
    res.send(rows);
    console.log('User info is: ', rows);
    connection.end();
  });
});

app.delete('/member/:id', (req, res) => {
  let id = req.params.id;
  let query = `DELETE FROM USERINFO WHERE ID  = '${id}'`
  console.log("user insert query :", query);

  const connection = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : '0000',
    database : 'jeheo_server'
  });

  connection.connect();
  connection.query(query, (error, rows, fields) => {
    if (error) throw error;
    res.send(rows);
    console.log('User info is: ', rows);
    connection.end();
  });
});

app.listen(3000, () => console.log('Example app listening on port 3000!'));

