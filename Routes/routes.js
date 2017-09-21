'use strict'

const express = require('express');
const ProductController = require('../Controllers/product');
const api = express.Router();

/*RUTAS*/
api.get('/', ProductController.indexOn);
api.get('/product', ProductController.getProducts);
api.get('/product/:productId',ProductController.getProduct);
api.post('/product', ProductController.saveProduct);
api.put('/product/:productId', ProductController.updateProduct);
api.delete('/product/:productId', ProductController.deleteProduct);
/*RUTAS*/

module.exports = api