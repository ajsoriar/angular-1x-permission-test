'use strict';

//var app = angular.module('demoAppCtrl', [ 'ngRoute' ]); // OLD router

var app = angular.module('ajsoriar-demoApp', [ 
	'ui.router', 
	'permission', 
	'permission.ui' 
]);

app.controller('demoAppCtrl', ['$scope', '$rootScope', '$http', 'PermRoleStore', 'PermPermissionStore',
function( $scope, $rootScope, $http, PermRoleStore, PermPermissionStore ) {

    console.log("demoAppCtrl()");

    $scope.init = function(){
    	console.log("init() demoAppCtrl");
    }

    $scope.removeAllRoleDefinitions = function() {

    	PermRoleStore.removeRoleDefinition('ADMIN');
    	PermRoleStore.removeRoleDefinition('MODERATOR');
    };

    $scope.restoreRoles = function() {

		PermRoleStore.defineRole('ADMIN', []); 
		PermRoleStore.defineRole('USER', []);
		PermRoleStore.defineRole('MODERATOR', []);
    };

    $scope.removeAllPermissions = function() {

    	PermPermissionStore.clearStore();
    };

    $scope.restorePermissions = function() {

		PermPermissionStore.defineManyPermissions( ['listItems', 'canSeeImage', 'editForm', 'editEvents'], /*@ngInject*/ function ( ) {
		  return true;
		});

    };

    /*

    //$stateChangePermissionStart

	//Event broadcasted before start of authorizing.

	$rootScope.$on('$stateChangePermissionStart', function(event, toState, toParams, options) { console.log("1") });

	//$stateChangePermissionAccepted

	//Event broadcasted when one of the permissions has been accepted and the state changes successfully.

	$rootScope.$on('$stateChangePermissionAccepted', function(event, toState, toParams, options) { console.log("2") });

	//$stateChangePermissionDenied

	//Event broadcasted when the access to the target state is not granted.

	$rootScope.$on('$stateChangePermissionDenied', function(event, toState, toParams, options) { console.log("3") });

	// $rootScope.$on('$stateChangePermissionDenied', function(event, toState, toParams, options) { 
	// 	alert("you need 'ADMIN' or 'MODERATOR' role !!!");
	// });

	*/

}]);

angular.element(document).ready(function() {

    console.log("angular document ready()!");

});

/*
$(document).ready(function() {

    console.log("jQuery document ready()");

});
*/

var Session = {
	"checkSession": function() { 

		return [ 'listItems' ] 
	}
};

app.run(function (PermPermissionStore, PermRoleStore ) {

	console.log("Define permissions and roles!");

    // ----------------------------------
    // Permissions are defined here!
    // ----------------------------------

	//Individual permissions

    PermPermissionStore
      .definePermission('seeDashboard', function () {
        return true;
      });


    // Multiple permissions

	var andresPermissions = ['listItems', 'canSeeImage', 'editForm', 'editEvents']

	// PermPermissionStore.defineManyPermissions( andresPermissions, /*@ngInject*/ function ( permissionName ) {
	//   return _.contains( andresPermissions, permissionName );
	// });

	PermPermissionStore.defineManyPermissions( andresPermissions, /*@ngInject*/ function ( ) {
	  return true;
	});

	// ----------------------------------
	// Roles are defined here!
	// ----------------------------------

	// only: ['ADMIN','MODERATOR']

	PermRoleStore
	  // Permission array validated role
	  // Library will internally validate if 'listEvents' and 'editEvents' permissions are valid when checking if role is valid   
	  .defineRole('ADMIN', ['listItems', 'editEvents', 'canSeeImage', 'editForm', ]);  
	  
	PermRoleStore    
	  // Or use your own function/service to validate role
	  .defineRole('USER', /*@ngInject*/ function (Session) {        
	    return window.Session.checkSession();
	  });

	PermRoleStore    
	  // Or use your own function/service to validate role
	  .defineRole('MODERATOR', /*@ngInject*/ function (Session) {        
	    return window.Session.checkSession();
	  });

  });



console.log("FILE: app.js was loaded.");