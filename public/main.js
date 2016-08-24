angular.module('filmSearchApp', ['ui.router'])
    .config(Config)
    // .controller('modalOpen', [
    //         '$scope',
    //         // modalOpenFunc
    //     ]);


//******Router Setup*******
    function Config($stateProvider, $urlRouterProvider) {
        // $urlRouterProvider.otherwise('/Login');
        $stateProvider
        
        //add .states for each html page
            // .state('Login', {
            //     url: '/Login',
            //     templateUrl: './mean-auth/views/auth.html'
            //     // controller: 'loginController as logCtrl'
            //     // authenticate: false
            // })

            .state('Landing', {
                url: '/Landing',
                templateUrl: './Landing/landing.html',
                controller: function ($scope){ // manually adding a function to the controller
                                $scope.signUp = function() {
                                    console.log('New User is signing Up')
                                    $('#signUpModal').openModal();
                                }
                                $scope.submitSignIn = function() {
                                    console.log('User Submitted Information for Sign Up')
                                    $('#signUpModal').closeModal();
                                }
                                $scope.login = function() {
                                    console.log('User Is Logging In')
                                    $('#loginModal').openModal();
                                }
                                $scope.loginSubmit = function() {
                                    console.log('User Logged In')
                                    $('#loginModal').closeModal();
                                }

                            
                        }
                // authenticate: true
            })
            .state('Test', {
                url: '/Test',
                templateUrl: './test.html'
                // controller: '',
                // authenticate: true
            })
            .state('About', {
                url: '/About',
                templateUrl: './About/about.html',
                controller: 'aboutPage'
                // authenticate: true
            })
            .state('Search', {
                url: '/Search',
                templateUrl: '/Search/filmsearch.html'
                // controller: 'searchController as searchCtrl',
                // authenticate: true
            });
            $urlRouterProvider.otherwise('/Landing');
    }