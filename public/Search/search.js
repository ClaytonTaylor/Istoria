angular.module('callTimeApp')
    .controller('searchController', searchController);
    
    function searchController($scope) {
        var self = this;
            

        
        self.test = function() {
            if (DataEnter() === true){
                console.log("works")
                return true
            }
            self.Name = $scope.Name;
            self.Position = $scope.Position;
            self.Gender = $scope.Gender;
            self.Location = $scope.Location;
            self.Experience = $scope.Experience;
            self.Equipment = $scope.Equipment;
            
            var newUser = {
                Name: self.Name,
                Gender: self.Gender,
                Location: self.Location,
                Experience: self.Experience,
                Equipment: self.Equipment,
                Position: self.Position,
                Phone: "405-313-0004"
            }
            
        // Function to prevent Code Break
            function DataEnter(){
                
                if($scope.Name === undefined) {
                    alert("Please enter a Name")
                    return true
                }
                
                if($scope.Position === undefined) {    
                    alert("Please enter your Crew Position.")
                    return true
                }
                
                if($scope.Gender === undefined) {
                    alert("Please enter your Gender")
                    return true
                }
                
                if($scope.Location === undefined) {
                    alert("Please enter your Location")
                    return true
                }
                
                if($scope.Experience === undefined) {
                    alert("Please enter your level of Experience")
                    return true
                }
                
                
            }
            
            
            
            function randomUser(list) {
                return list[Math.floor(Math.random() * list.length)];
            }
    
            function callCrew(user,crew){
            	var newArray = []
            	var newCrew = {}
            	var POS = user.Position
            	for(var i in crew) {
            		newArray = []
            			for(var c = 0; c < crew[i].length; c++){
            				if(user.Experience === crew[i][c].Experience){
            					newArray.push(crew[i][c])
            				}
            				crew[i][c].Position = i
            				newCrew[i] = randomUser(newArray)
            			}
            	}
            	newCrew[user.Position] = user
            	//delete newCrew[POS].Position
            	return newCrew
            }
            
            self.NewCrew = callCrew(newUser, crewList)
            console.log(self.NewCrew)
          
          
          
        };
        
        
    }