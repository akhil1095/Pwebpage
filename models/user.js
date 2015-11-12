//import mongoose and bcrypt
var mongoose = require('mongoose');
var bcrypt = require('bcrypt-nodejs');

var Schema = mongoose.Schema; // Schema object

var UserSchema = new Schema({
	name: String,
	email: String,
	number: Int16Array,
	salt: String,
	provider: String,
	providerId: String,
	providerData: {},
	created: Number,
	updated: Number
}, 
{
	collection: 'conatactInfo'
});

// Generating a Hash
ContactSchema.methods.generateHash = function(password) {
	return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);
}

// Checking if password is valid
ContactSchema.methods.validPassword = function (password) {
	return bcrypt.compareSync(password, this.password);
}

module.exports = mongoose.model('User', ContactSchema);