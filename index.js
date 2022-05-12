const express = require('express');
const path = require('path');
//const database = require("../database/index.js");
const PORT = 3000;
const app = express();

app.use(express.json());
app.use(express.urlencoded());

app.use(express.static(path.join(__dirname, './client/dist')));

// app.get('/', (req, res) => {
//   let sql = ';';
//   database.query(sql, (err, data) => {
//     if (err) {
//       console.log(err);
//       return;
//     }
//     res.send(data);
//   })
// })

// app.post('/', (req, res) => {
//   let sql = ';'
//   database.query(sql, [req.body.uploadText, req.body.defaultDescription], (err, data) => {
//     if (err) {
//       console.log(err);
//       console.log(req.body)
//       return;
//     }
//     console.log('this worked!', req.body);
//     res.send(data);
//   })
// })

app.listen(PORT, () => {
  console.log(`Server listening at localhost:${3000}!`);
});
