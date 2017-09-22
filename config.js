module.exports = {
	port : process.env.PORT || 3000,
	db: process.env.MONGODB || 'mongodb://localhost:27017/shop',
	SECRET_TOKEN: 'miclavedetokens' /*es como la key:generate de laravel se recomienda colocar una fuerte*/
}