const http = require('http');
const mongoose = require('mongoose');
const user = require('./src/routes/userRoute')
const hostname = 'localhost';
const port = 3000;
var express = require('express');
var app = express();
const server = http.createServer(app)

app.use(express.json())
app.use('/', user)

mongoose.connect('mongodb://localhost:27017/test').then(() => {
  console.log("Conectado com o DB")
})
  .catch((err) => {
    console.log(err)
  });
server.listen(port, hostname, () => {

});



