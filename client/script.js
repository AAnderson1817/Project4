// script.js

    // create the module and name it scotchApp
    var Hdis = angular.module('Hdis', ['ngRoute']);

    Hdis.config(function($routeProvider) {
        $routeProvider

            // route for the home page
            .when('/', {
                templateUrl : 'views/splash.html',
                controller  : 'mainController'
            })

            // route for the about page
            .when('/about', {
                templateUrl : 'views/about.html',
                controller  : 'aboutController'
            });
    });

    // create the controller and inject Angular's $scope
    Hdis.controller('mainController', function($scope) {

        // create a message to display in our view
        $scope.message = 'How Do I Sound?';
        $scope.alternate = 'Alternatively...'
    });

    Hdis.controller('aboutController', function($scope) {
        $scope.message = 'All about HowDoISound';
    });
