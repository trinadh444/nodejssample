angular.
    module('todayTask').
    component('todayTask', {
        templateUrl: 'components/today-task/today-task.template.html',
        controller: [
            '$scope',
            '$http',
            '$window',
            '$filter',
            function TodayTaskController($scope, $http, $window, $filter) {
                $scope.msg = "This is from today-task component";
                $scope.today_date = new Date();
                console.log("today: " + $scope.today_date);
                $scope.final_data = {}
                $scope.checkbox_val = "";
                $scope.formData =
                    [
                        {
                            date: '2019-08-21',
                            hour: '12',
                            minute: '30',
                            task_desc: 'this is sample task 1',
                            status: false
                        },
                        {
                            date: '2019-08-21',
                            hour: '13',
                            minute: '00',
                            task_desc: 'this is sample task 2',
                            status: false
                        },
                        {
                            date: '2019-08-21',
                            hour: '13',
                            minute: '30',
                            task_desc: 'this is sample task 3',
                            status: false
                        },
                        {
                            date: '2019-08-21',
                            hour: '11',
                            minute: '30',
                            task_desc: 'this is sample task 4',
                            status: false
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
                        }, function failureCallback(res) {
                            console.error("Error in getdata: " + JSON.stringify(res));
                        });
                }
                $scope.addTodayTask = function (todoData) {
                    var todoData2={};
                    var task_uuid=$scope.uuidGenerator();
                    var task_time=todoData.hour+":"+todoData.minute;
                    todoData2['task_desc']=todoData.task_desc;
                    todoData2['task_date']=$scope.today_date;
                    todoData2['task_uuid']=task_uuid;
                    todoData2['task_time']=task_time;
                    todoData2['task_status']=false;
                    todoData2['uri']="home";
                    console.log("final_data: " + JSON.stringify(todoData2));

                    var req = {
                        method: 'POST',
                        url:'',
                        headers:{
                            'Content-Type':'application/json'
                        },
                        data: todoData2
                    }
                    $http(req)
                    .then(function successCallBack(res){
                        console.log("success: "+JSON.stringify(res.data));
                    }, function failureCallback(res){
                        console.error("Error in post data: "+JSON.stringify(res));
                    })
                }

                $scope.deleteTodoTask = function () {
                    //delete method
                }
                $scope.undoTodoTask = function () {
                    //undo method
                }




                $scope.todoGetValue = function (taskDesc, taskStatus) {
                    var message = "";
                    // for(var i=0;i<$scope.formData.length;i++){
                    if (taskStatus) {
                        // if($scope.formData[i].status){
                        // var taskDesc=$scope.formData[i].task_desc;
                        // var taskDate=$scope.formData[i].date;
                        // var taskStatus=$scope.formData[i].status;
                        message += "taskdesc: " + taskDesc + "status: " + taskStatus;
                        // }
                    }
                    else {
                        message += "taskdesc: " + taskDesc + "status: " + taskStatus;
                    }
                    $window.alert(message);
                }

                $scope.uuidGenerator = function () {
                    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
                        var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
                        return v.toString(16);
                    });
                }
            }
        ]
    })