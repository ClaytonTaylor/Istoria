// Users Controller


//Requiring the model so we can run methods on it
var User = require('../models/user');

module.exports = {
	get : (req, res) => {
		User.find({}, function(err, users){
				console.error(err, users);
				res.json(users);
			})
	},

	upsert : (req, res) => {
		if(req.params.id){

		}
		else {
			var newUser = new User(req.body);
			newUser.save (function(err, user){
				return res.json(err);
			})
				res.json(hero);

		};
	}
}