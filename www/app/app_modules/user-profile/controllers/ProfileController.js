app.controller('ProfileController',['$scope', 'ProfileServices',  function( $scope, ProfileServices ){

    console.log("ProfileController()");
    $scope.isSaving = false;

    $scope.userData = {
    	id: null,
    	name: null,
    	age: null
    }

    $scope.init = function(){
    	console.log("init() ProfileController()");
    	$scope.getUserProfile();
    }

    $scope.getUserProfile = function(){

    	var loadData = ProfileServices.getUserData();
        loadData.then(function(response) {

            $scope.userData = response;
            console.log("$scope.userData ", $scope.userData );

        }, function(error) {

        	console.log("ERROR: There was a problem getting user data from backend." );
        });
    }

    $scope.btnSaveUserData = function() {

    	$scope.isSaving = true;

    	var loadData = ProfileServices.saveUserData( $scope.userData );
        loadData.then(function(response) {

        	console.log("GREAT! Data was properly sent." );
        	$scope.isSaving = false;

        }, function(error) {

        	console.log("ERROR: There was a problem saving user data." );
        	$scope.isSaving = false;

        });
    }

}]);

console.log("FILE: ProfileController.js was loaded.");