angular.module('myApp').
    config(['$locationProvider', '$routeProvider',
        function config($locationProvider, $routeProvider) {
            $locationProvider.hashPrefix('!');
            $routeProvider.
                when('/', {
                    template: '<today-task></today-task>'
                }).
                when('/incomplete-task', {
                    template: '<incomplete-task></incomplete-task>'
                }).
                when('/old-task', {
                    template: '<old-task></old-task>'
                }).
                otherwise('/');
        }
    ]);