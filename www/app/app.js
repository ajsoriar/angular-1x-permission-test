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