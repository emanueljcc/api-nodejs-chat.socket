'use strict'

const express = require('express');
const ProductController = require('../Controllers/product');
const UserController = require('../Controllers/user');
const auth = require('../Middlewares/auth');
const api = express.Router();

/*RUTAS*/
//api.get('/', ProductController.indexOn);
api.get('/product', ProductController.getProducts);
api.get('/product/:productId',ProductController.getProduct);
api.post('/product', auth, ProductController.saveProduct);
api.put('/product/:productId', auth, ProductController.updateProduct);
api.delete('/product/:productId', auth, ProductController.deleteProduct);

api.post('/signUp', UserController.signUp);
api.post('/signIn', UserController.signIn);

/*RUTA CON MIDDLEWARE se llama solo auth porque solo tiene una funcion en el archivo*/
api.get('/private', auth, (req,res)=>{ /*esta es de ejemplo se puede usar un contyrolador*/
	res.status(200).send({message: 'Tienes Acceso'});
});

/*RUTAS*/

module.exports = api;