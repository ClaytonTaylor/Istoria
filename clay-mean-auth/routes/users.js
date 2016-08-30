// Users Controller


//Requiring the model so we can run methods on it
var User = require('../models/user');

module.exports = {
	get : (req, res) => {
		User.find({city: 'Oklahoma City'}, (err, users) => {
			var reduced = users.reduce(function(result, user){
				if(!result.hasOwnProperty(user.crew)) result[user.crew] = user;
				return result;
			}, {});
			res.send(reduced);
	  });
	},







	// 	User.find({city: 'Oklahoma City'}, function(err, users){
	// 		console.log('Getting Users');
	// 		var usersGet = users.reduce;
	// 					return users.reduce((result, user) => {
	// 						if (!result.hasOwnProperty(user.crew)) result[user.crew] = user;
	// 						return result;
	// 				}, {});

	// 	})
	// 	res.send(user);
	// },


			// var result = users.reduce(function() {
			// 				console.error(err, users);
			// 			if (!res.hasOwnProperty(users.crew)) res[users.crew] = users;
			// 			// return res;
			// }, {});
			// res.send(result);

			// });

			// var unique = users.reduce((res, users) => {
			// 			if (!res.hasOwnProperty(user.crew)) res[user.crew] = user;
			// 			return res;
			// 		}, {});
			// res.send(unique);
				
			// });


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