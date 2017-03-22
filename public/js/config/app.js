var Pilot = angular.module('Pilot', ['ngMaterial', 'ngAnimate', 'ngMessages', 'ngAria', 'ui.router']);

(function(app) {
    app.config(['$stateProvider', '$urlRouterProvider','$mdThemingProvider', function($stateProvider, $urlRouterProvider, $mdThemingProvider) {
/*
        $mdThemingProvider.theme('lime')
          .primaryPalette('blue')
          .warnPalette('red');
          
        $mdThemingProvider.alwaysWatchTheme(true);*/

        $urlRouterProvider.otherwise('/');

        $stateProvider.state('home', {
            url: '/',
            templateUrl: 'partials/home-partial.html',
            controller: 'HomeController'
        })

        .state('about', {
            url: '/about',
            templateUrl: 'partials/about-partial.html',
            controller: 'AboutController'
        });
    }]);

})(Pilot);
