angular.module('filmSearchApp')
    .controller('usersController', userCtrl)

userCtrl.$inject = ['apiFactory']

function userCtrl (apiFactory){
    var userCtrl = this;
    userCtrl.newUser = {
        powers     : [''], // starting with an empty array element so the ngRepeat will show HTML
        weaknesses : ['']
    };
    userCtrl.newEquip = {
        amenities : ['']
    }

    userCtrl.retrieveUsers = function(){
        apiFactory
            .getUsers()
            .then(function(response){
                userCtrl.userList = response.data;
            });
    }
    userCtrl.retrieveUsers();
    // console.log(apiFactory)

    userCtrl.makeAUser = function () {
        apiFactory
            .createUser(userCtrl.newUser)
            .then(function(response){
                console.log(response);
                userCtrl.retrieveUsers();
            });
    }

    userCtrl.pwExtra = function (which) {
        userCtrl.newUser[which].push('');
    }


    userCtrl.retrieveEquips = function(){
        apiFactory
            .getEquips()
            .then(function(response){
                userCtrl.equipList = response.data;
            });
    }
    
    userCtrl.retrieveEquips();

    userCtrl.makeAnEquip = function () {
        apiFactory
            .createEquip(userCtrl.newEquip)
            .then(function(response){
                console.log(response);
            });
    }

    userCtrl.addAmenity = function(){
        userCtrl.newEquip.amenities.push('');
    }

}