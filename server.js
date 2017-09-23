'use strict'

const nodemon = require('nodemon');
const mongoose = require('mongoose');
const app = require('./app');
const config = require('./config');

const messages = [{
		id: 1,
		text: 'hola soy un bot',
		author: 'Emanuel Castillo'
	}]

//sockets para el chat
const server = require('http').Server(app);
const io = require('socket.io')(server);

app.get('/chat', (req,res)=>{
	res.render('chat')
	//res.status(200).send("Hello World");
})

io.on('connection', (socket)=>{
	console.log('se conectaron al chat con socket');
	socket.emit('messages', messages)

	socket.on('newMessage', (data)=>{
		messages.push(data)
		io.sockets.emit('messages', messages)
	})

})


//sockets para el chat




/**
*
*
@deprecated
*
*
**/
/*mongoose.connect(config.db,(err,res)=>{
	if(err) 
		return console.log(`Error al conectar a la DB: ${err}`);
	console.log('Conexion a la DB establecida...');
	
	app.listen(config.port, () =>{
		console.log(`API Work http://localhost:${config.port}`);
	});
})*/
/**
*
*
@deprecated
*
*
**/

mongoose.Promise = global.Promise;
mongoose.connect(config.db, {useMongoClient: true})
	.then(() => {
		console.log('Conexion a la DB establecida...');
		server.listen(config.port, () =>{
			console.log(`API Work http://localhost:${config.port}`);
		});
	})
	.catch(err => console.error(`Error al conectar a la DB: ${err}`));
