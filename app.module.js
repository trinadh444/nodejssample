var app = angular.module('myApp', [
    'ngRoute',
    'todayTask',
    'incompleteTask',
    'oldTask'
]);
app.controller('myCtrl', function ($timeout, $scope) {
});