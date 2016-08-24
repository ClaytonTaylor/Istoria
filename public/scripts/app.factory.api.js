angular.module('filmSearchApp')
    .factory('apiFactory', apiFact)

apiFact.$inject = ['$http']

// Our factory will be the MAIN place we make calls to the backend
function apiFact ($http){

    function getUsers () {
        return $http.get('/api/users')
    }
    function createUser (userData) {
        return $http.post('/api/users', userData)
    }

    function getEquips (equipID){
        var param = equipID ? `/${equipID}` : '';

        var param = '';
        if(equipID){
            param = `/${equipID}`;
            // '/' + hqID
        }

        return $http.get(`/api/equips${param}`)
        // '/api/hqs' + param
    }
    function createEquip (equipData){
        return $http.post('/api/equips', equipData)
    }

    // This return value is exactly what we gain access to in the controller
    return {
        getUsers : getUsers,
        createUser: createUser,
        getEquips    : getEquips,
        createEquip  : createEquip,
    }
} 