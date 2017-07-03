app.controller('TasksController',['$scope', 'TasksServices', function($scope, TasksServices){
    console.log("TasksController()");

    $scope.listOfTasks1 = null;
    $scope.listOfTasks2 = null;

    $scope.init = function(){
    	console.log("init() TasksController()");
    	$scope.loadTasks1();
    	$scope.loadTasks2();
    }

    $scope.loadTasks1 = function() {

        console.log("Load task1!");

        var loadData = TasksServices.getTasks1();
        loadData.then(function(response) {

            $scope.listOfTasks1 = response;
            console.log("$scope.listOfTasks1: ", $scope.listOfTasks1 );

        }, function(error) {

        	console.log("ERROR: Error al descargar data de task1" );
        });
    }

    $scope.loadTasks2 = function() {

        console.log("Load task2!");

        var loadData = TasksServices.getTasks2();
        loadData.then(function(response) {

            $scope.listOfTasks2 = response; //[0].tasks;
            console.log("$scope.listOfTasks2: ", $scope.listOfTasks2 );

        }, function(error) {

        	console.log("ERROR: Error al descargar data de task2" );
        });
    }
    
}]);

console.log("FILE: TasksController.js was loaded.");