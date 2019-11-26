angular.
    module('incompleteTask').
    component('incompleteTask', {
        templateUrl: 'components/incomplete-task/incomplete-task.template.html',
        controller: [
            '$scope',
            '$http',
            function IncompleteTaskController($scope, $http) {
                $scope.msg = "Task date";
                $scope.formData =
                    [
                        {
                            date: '2019-08-21',
                            hour: '12',
                            minute: '30',
                            task_desc: 'this is sample task 1',
                            status: true
                        },
                        {
                            date: '2019-08-21',
                            hour: '13',
                            minute: '00',
                            task_desc: 'this is sample task 2'
                        },
                        {
                            date: '2019-08-21',
                            hour: '13',
                            minute: '30',
                            task_desc: 'this is sample task 3'
                        }
                    ];
            }
        ]
    });