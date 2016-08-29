// Users Controller

var User = require('../models/user');

module.exports = {
	get : (req, res) => {

		User.find({})
			.populate('city')
			.exec(function(err, users){
				res.json(users);
			});
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