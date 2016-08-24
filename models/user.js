var mongoose = require('mongoose');

var userSchema = mongoose.Schema({
	firstName: 		{type : String},
	lastName: 		{type : String},
	email: 			{type : String},
	password: 		{type : String},
	phoneNumber: 	{type : String},
	crewPosition: 	{type : String},
	location: 		{type : String},
	userEquipment: 		{
			type: mongoose.Schema.ObjectId,
			ref: 'Equip'
	},
});

module.exports = mongoose.model('User', userSchema, 'allusers');