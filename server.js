'use strict'

const nodemon = require('nodemon');
const mongoose = require('mongoose');
const app = require('./app');
const config = require('./config');

mongoose.connect(config.db,(err,res)=>{
	if(err) 
		return console.log(`Error al conectar a la DB: ${err}`);
	console.log('Conexion a la DB establecida...');
	
	app.listen(config.port, () =>{
		console.log(`API Work http://localhost:${config.port}`);
	});
})
