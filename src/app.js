const http = require('http');
const mongoose = require('mongoose');
const user = require('./routes/user.route');
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./swagger.json');

var express = require('express');
var app = express();
http.createServer(app);

app.use(express.json());
app.use('/', user);
app.use('/swagger', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

mongoose
    .connect('mongodb://localhost:27017/test')
    .then(() => {
        console.log('Conectado com o DB');
    })
    .catch((err) => {
        console.log(err);
    });

module.exports = app;
