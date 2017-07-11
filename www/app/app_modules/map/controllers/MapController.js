app.controller('MapController',['$scope', 'MapServices', function($scope, MapServices){
    
    $scope.listOfData = {};
    
    $scope.init = function(){
    	console.log("init() MapController()");
    	$scope.loadData();    
    }

    $scope.loadData = function() {

        var loadData = MapServices.getData();
        loadData.then(function(response) {


            console.log("response: ", response );

            $scope.listOfData = response;

            
            console.log("$scope.listOfData: ", $scope.listOfData );
            if ( $scope.listOfData != null) calculate();

        }, function(error) {
        	console.log("ERROR: Error al descargar data de task1" );
        });
    }

    function calculate(){

        var lon = $scope.listOfData.length;
        console.log("lon:", lon);

    }

}]);

console.log("FILE: MapController.js was loaded.");
