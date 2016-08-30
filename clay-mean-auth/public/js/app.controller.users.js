angular.module('filmSearchApp')
	.controller('usersController', userCtrl) 

userCtrl.$inject = ['apiFactory']
// searchCtrl.$inject = ['apiFactory']

function userCtrl (apiFactory){
	var uCtrl = this;

	uCtrl.retrieveUsers = function(){
		apiFactory
			.getUsers()
			.then(function (response){
				uCtrl.userList = response.data;
			})
			// 	unique = response.data;

			// 	var data = [
			// 		{ firstName: 'Kyle', crew: 'Casting Director'},
			// 		{ firstName: 'Daulton', crew: 'Casting Director'},
			// 		{ firstName: 'Nick', crew: 'First Assistant Director (1st A.D.)'}
			// 		];
			
			// 		var unique = data.reduce((res, user) => {
			// 			if (!res.hasOwnProperty(user.crew)) res[user.crew] = user;
			// 			return res;
			// 		}, {});
			
			// 		console.log(unique);			
			// });
			
	}
	

	uCtrl.makeAUser = function () {
		apiFactory
			.createUser(uCtrl.newUser)
			.then(function(response){
				console.log(response);
				uCtrl.retrieveUsers();
			});
	}

	uCtrl.open = function() {
		$('.collapsible').collapsible();
		uCtrl.retrieveUsers();

	};


}

// function searchCtrl (apiFactory){

// 	var sCtrl = this;

// 	sCtrl.generateUser = function($scope) {
//         var self = this;

        

// 		var crewList = {
//     		"Casting Director":castingDirector,
//     		"Director":director,
//     		"First Assistant Director (1st A.D.)":firstAssistantDirector,
//     		"Second Assistant Director (2nd A.D.)":secondAssistantCamera,
//     		"Cinematographer (Director of Photography)":cinematographer,
//     		"Camera Operator":cameraOperator,
//     		"First Assistant Camera (1st A.C.)":firstAssistantCamera,
//     		"Second Assistant Camera (2nd A.C.)":secondAssistantCamera,
//     		"Gaffer":gaffer,
//     		"Best Boy Lighting":bestBoyLighting,
//     		"Lighting Technician":lightingTechnician,
//     		"Grip":grip,
//     		"Key Grip":keyGrip,
//     		"Dolly Grip":dollyGrip,
//     		"Grips":grips,
//     		"Sound Mixer":soundMixer,
//     		"Boom Operator":boomOperator,
//     		"Production Designer":productionDesigner,
//     		"Art Director":artDirector,
//     		"Set Designer":setDesigner,
//     		"Illustrator":illustrator,
//     		"Set Decorator":setDecorator,
//     		"Lead Man":leadMan,
//     		"Set Dresser":setDresser,
//     		"Construction Coordinator":constructionCoordinator,
//     		"Head Carpenter":headCarpenter,
//     		"Carpenter":carpenter,
//     		"Costume Designer":costumeDesigner,
//     		"Costume Supervisor":costumeSupervisor,
//     		"Costumer":costumer,
//     		"Key Makeup Artist":keyMakeUpArtist,
//     		"Makeup Artist":makeUpArtist,
//     		"Special Effects Supervisor":specialEffectsSupervisor,
//     		"Hair Stylist":hairStylist,
//     		"Stunt Coordinator":stuntCoordinator,
//     		"Stuntman":stuntman,
//     		"Film Editor":filmEditor,
//     		"Visual Effects Producer":visualEffectsProducer,
//     		"Sound Designer":soundDesigner,
//     		"Sound Editor":soundEditor,
//     		"Music Supervisor":musicSupervisor,
//     		"Composer":composer		
//             }

        
//         // self.test = function() {
//             // if (DataEnter() === true){
//             //     console.log("works")
//             //     return true
//             // }
//             // self.firstName = $scope.firstName;
//             // self.lastName = $scope.lastName;
//             // self.email = $scope.email;
//             // self.Location = $scope.Location;
//             // self.Experience = $scope.Experience;
//             // self.Equipment = $scope.Equipment;
            
//             // var newUser = {
//             //     Name: self.Name,
//             //     Gender: self.Gender,
//             //     Location: self.Location,
//             //     Experience: self.Experience,
//             //     Equipment: self.Equipment,
//             //     Position: self.Position,
//             //     Phone: "405-313-0004"
//             // }
            
//         // Function to prevent Code Break
//             // function DataEnter(){
                
//             //     if($scope.Name === undefined) {
//             //         alert("Please enter a Name")
//             //         return true
//             //     }
                
//             //     if($scope.Position === undefined) {    
//             //         alert("Please enter your Crew Position.")
//             //         return true
//             //     }
                
//             //     if($scope.Gender === undefined) {
//             //         alert("Please enter your Gender")
//             //         return true
//             //     }
                
//             //     if($scope.Location === undefined) {
//             //         alert("Please enter your Location")
//             //         return true
//             //     }
                
//             //     if($scope.Experience === undefined) {
//             //         alert("Please enter your level of Experience")
//             //         return true
//             //     }
                
                
//             // }
            
            
            
//             function randomUser(list) {
//                 return list[Math.floor(Math.random() * list.length)];
//             }
    
//             function callCrew(user,creww){
//             	var newwArray = []
//             	var newCreww = {}
//             	var POS = user.crew
//             	for(var i in creww) {
//             		newwArray = []
//             			for(var c = 0; c < creww[i].length; c++){
//             				if(user.city === creww[i][c].city){
//             					newwArray.push(creww[i][c])
//             				}
//             				creww[i][c].crew = i
//             				newCreww[i] = randomUser(newwArray)
//             			}
//             	}
//             	newCreww[user.crew] = user
//             	//delete newCrew[POS].Position
//             	return newCreww
//             }
            
//             self.NewCreww = callCrew(newUser, crewList)
//             console.log(self.NewCreww)

// }
// };
