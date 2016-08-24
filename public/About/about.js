angular.module('filmSearchApp')
		.controller('aboutPage', aboutBeginButton)

	function aboutBeginButton ($scope){ // manually adding a function to the controller
                                console.log("About Page Controller Working")
                                $scope.signUp = function() {
                                    console.log('New User is signing Up')
                                    $('#signUpModal').openModal();
                                }
                                $scope.submitSignIn = function() {
                                    console.log('User Submitted Information for Sign Up')
                                    $('#signUpModal').closeModal();
                                }
                            }