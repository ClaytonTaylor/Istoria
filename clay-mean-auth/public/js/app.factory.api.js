angular.module('filmSearchApp')
	.factory('apiFactory', apiFact)

apiFact.$inject = ['$http']

function apiFact ($http){

	function getUsers () {
		return $http.get('/api/users')
	}
	function createUser (userData) {
		return $http.post('/api/users', userData)
	}


	return {
		getUsers : getUsers,
		createUser : createUser,
	}
}