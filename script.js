var app = angular.module('myApp', []);

app.controller('myCtrl', function ($scope) {
    $scope.today_date = new Date();
    $scope.final_data={}
    $scope.checkbox_val = "";
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

    $scope.text = "text from angular";

    $scope.displayList = function () {
        var req = {
            method: 'GET',
            url: '/api/todos',
        }
        $http(req)
            .then(function successCallBack(res) {
                console.log("todolist: " + JSON.stringify(res.data));
                $scope.formData = {};
            }, function failureCallback() {
                console.error("Error in getdata: " + JSON.stringify(res));
            });
    }
    $scope.addTodayTask=function(todoData){
        console.log("final_data: "+JSON.stringify(todoData));
    }

    $scope.deleteTodoTask=function(){
        //delete method
    }
    $scope.undoTodoTask=function(){
        //undo method
    }
});