'use strict';

const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const api = require('./Routes/routes');

//const server = require('http').createServer();
//const io = require('socket.io')(server);

const ProductController = require('./Controllers/product');

app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())
app.use('/api',api)
module.exports = app