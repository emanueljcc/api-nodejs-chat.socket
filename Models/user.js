'use strict'

const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const bcrypt = require('bcrypt-nodejs');
const crypto = require('crypto');

const UserSchema = new Schema({
	email: { type: String, unique: true, lowercase: true },
	displayName: String,
	avatar: String,
	password: { type: String, select: false }, /*select false significa que cuando se haga una peticion de el model user no nos traiga password en el json*/
	signupDate: { type: Date, default: Date.now() },
	lastLogin: Date
});

UserSchema.pre('save', function(next){ /*pre es un hook de loopback por ejemplo*/
	let user = this
	console.log(user);
	if(!user.isModified('password')) return next()

	bcrypt.genSalt(10, (err, salt) => {
		if(err)	return next(err);

		bcrypt.hash(user.password, salt, null, (err,hash)=>{
			if(err) return next(err);

			user.password = hash;
			next();
		})
	})

})

UserSchema.methods.gravatar = function () {
	if(!this.email) return 'https://gravatar.com/avatar/?s=200&d=retro';

	const md5 = crypto.createHash('md5').update(this.email).digest('hex')
	return `http://gravatar.com/avatar/${md5}?s=200&d=retro`
}

module.exports = mongoose.model('User', UserSchema);