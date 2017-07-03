'use strict';

//var app = angular.module('demoAppCtrl', [ 'ngRoute' ]); // OLD router

var app = angular.module('ajsoriar-demoApp', [ 'ui.router' ]);

app.controller('demoAppCtrl', ['$scope', '$rootScope', '$http',
function( $scope, $rootScope, $http) {

    console.log("demoAppCtrl()");

    $scope.init = function(){
    	console.log("init() demoAppCtrl");
    }

}]);

angular.element(document).ready(function() {

    console.log("angular document ready()!");

});

/*
$(document).ready(function() {

    console.log("jQuery document ready()");

});
*/

console.log("FILE: app.js was loaded.");