angular.
    module('oldTask').
    component('oldTask', {
        templateUrl: 'components/old-task/old-task.template.html',
        controller: [
            '$scope',
            '$http',
            function OldTaskController($scope, $http) {
                $scope.msg = "This is from old-task component";
            }
        ]
    });