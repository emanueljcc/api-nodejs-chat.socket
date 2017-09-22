'use strict'

const services = require('../Services')

function isAuth(req,res,next){ /*como es middleware recibe un 3er params*/
	if(!req.headers.authorization){
		return res.status(403).send({message: 'No tienes Autorizacion'});
	}

	const token = req.headers.authorization.split(' ')[1];
	
	services.decodeToken(token)
	.then(response=>{
		req.user = response
		next()
	})
	.catch(response=>{
		res.status(response.status)
	})	
}

module.exports = isAuth;