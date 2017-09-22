'use strict';

const express = require('express');
const bodyParser = require('body-parser');
const hbs = require('express-handlebars'); /*VISTAS*/
const app = express();
const api = require('./Routes/routes');

//const server = require('http').createServer();
//const io = require('socket.io')(server);

const ProductController = require('./Controllers/product');

app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())

app.engine('.hbs',hbs({ /*decirle a express que use hbs*/
	defaultLayout: 'default',
	extname: '.hbs'
}))

/*set view*/
app.set('view engine', '.hbs')

app.use('/api',api)

app.get('/login',(req,res)=>{ // para correr sin /api
	res.render('login')
})

app.get('/',(req,res)=>{ // para correr sin /api
	res.render('product')
})

module.exports = app