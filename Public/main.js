var socket = io.connect('http://localhost:3000',{ 'forceNew': true })

socket.on('messages', (data)=>{
	console.log(data)
	render(data)
})

function render(data){
	var html = data.map((element, index)=>{
		return(`

				<div class="container">
	                <div class="row message-bubble">
	                <p class="text-muted">${element.author}</p>
	                    <span>${element.text}</span>
	                </div>
	            </div>`)
	}).join(' ');
	
	document.getElementById('messages').innerHTML = html;
}

function addMessage(e){
	var payload = {
		author: document.getElementById('username').value,
		text: document.getElementById('texto').value
	}

	socket.emit('newMessage', payload)

	return false; /*para que termine aqui la funcion*/
}