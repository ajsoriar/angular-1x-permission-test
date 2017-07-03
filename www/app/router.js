// This is the OLD router.

/*
app.config(['$routeProvider', '$httpProvider',
    function($routeProvider, $httpProvider) {
    
    $routeProvider
        
        .when('/', {
            templateUrl: 'app/app_modules/home/views/home.html'
        })
        .when('/tasks', {
            templateUrl: 'app/app_modules/list-of-tasks/views/Tasks.html',
            controller: 'TasksController'
        })
        .when('/profile', {
            templateUrl: 'app/app_modules/user-profile/views/Profile.html',
            controller: 'ProfileController'
        })
        .otherwise({

        });

}]);
*/


/*
$stateProvider
  .state('userManagement', {
    [...]
    data: {
      permissions: {
        only: ['ADMIN','MODERATOR']
      }
    }
  });
*/

app.config(function( $stateProvider, $urlRouterProvider ) {

    console.log("app.config...");
    
    $urlRouterProvider.otherwise('/state1');
    
    $stateProvider
        .state('state1', {
              url: "/state1",
              templateUrl: "app/partials/state1.html"
        })
        .state('state1.list', {
              url: "/list",
              templateUrl: "app/partials/state1.list.html",
              controller: function($scope) {
                $scope.items = ["A", "List", "Of", "Items"];
              }
        })
        .state('state2', {
              url: "/state2",
              templateUrl: "app/partials/state2.html"
        })
        .state('state2.list', {
              url: "/list",
              templateUrl: "app/partials/state2.list.html",
              controller: function($scope) {
                $scope.things = ["A", "Set", "Of", "Things"];
              }
        })
        .state('state-maps', {
              url: "/maps",
              templateUrl: "app/app_modules/map/views/Map.html",
              controller: "MapController",
              data: {
                permissions: {
                  only: ['ADMIN','MODERATOR']
                }
              }
        });

        // Because of a bug in ui-router, when using $urlStateProvider.otherwise we get an infinite digest loop error.
        // check it out here: https://github.com/Narzerus/angular-permission/wiki/Installation-guide-for-ui-router#known-issues

}); // closes $pruebaApp.config()

console.log("FILE: router.js was loaded.");