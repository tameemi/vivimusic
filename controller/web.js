var module = angular.module("web", ['ngRoute']);

    module.config(['$routeProvider', '$locationProvider',
        function($routeProvider, $locationProvider) {
            $routeProvider.
                when('/', {
                    templateUrl: 'partials/home.html',
                    controller: 'MainController'
                }).
                when('/test', {
                    templateUrl: 'partials/test.html',
                    controller: 'MainController'
                }).
                when('/music', {
                    templateUrl: 'partials/music.html',
                    controller: 'MainController'
                }).
                otherwise({
                    redirectTo: 'partials/home.html'
                });

        }]);
//$locationProvider.html5Mode(true);
// if used html5mode add <base href="/"> to index.html
    module.controller("MainController", function($scope) {

    })