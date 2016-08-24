var mongoose = require('mongoose');

var equipmentSchema = mongoose.Schema({
	name: 		{type : String}
	amenities: 	{type : Array},
});

module.exports = mongoose.model('Equipment', equipmentSchema);