angular.module('callTimeApp', ['ui.router'])
    .config(Config)
    .controller('modalOpen', [
            '$scope',
            modalOpenFunc
        ]);


//******Router Setup*******
    function Config($stateProvider, $urlRouterProvider) {
        // $urlRouterProvider.otherwise('/Login');
        $stateProvider
        
        //add .states for each html page
            .state('Login', {
                url: '/Login',
                templateUrl: './Login/login.html'
            //     data: {
            //     css: '.Login/materialize.min.css'
            // }
                // controller: 'loginController as logCtrl'
                // authenticate: false
            })

            .state('Landing', {
                url: '/Landing',
                templateUrl: './Landing/landing.html'
                // controller: '',
                // authenticate: true
            })
            .state('MusicLanding', {
                url: '/MusicLanding',
                templateUrl: './Music/musiclanding.html'
                // controller: '',
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

    function modalOpenFunc($scope) {
        $('#modal1').openModal();
    }