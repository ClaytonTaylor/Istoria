angular.module('filmSearchApp')
	.controller('usersController', userCtrl)

userCtrl.$inject = ['apiFactory']

function userCtrl (apiFactory){
	var uCtrl = this;

	uCtrl.retrieveUsers = function(){
		apiFactory
			.getUsers()
			.then(function (response){
				uCtrl.userList = response.data;
			});
	}
	uCtrl.retrieveUsers();

	uCtrl.makeAUser = function () {
		apiFactory
			.createUser(uCtrl.newUser)
			.then(function(response){
				console.log(response);
				uCtrl.retrieveUsers();
			});
	}
}