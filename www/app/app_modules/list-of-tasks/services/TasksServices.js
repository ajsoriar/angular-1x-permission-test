'use strict';

app.service('TasksServices',
    ['$http', '$q' ,
    function($http, $q) {

        return {

            getTasks1: function() {

                var deferred = $q.defer();
                var request = {};
                request.deferred = deferred;

                var response = [{
                                    "id": 1,
                                    "taskName": "Tarea 1"
                                }, {
                                    "id": 2,
                                    "taskName": "Tarea 2"
                                }, {
                                    "id": 3,
                                    "taskName": "Tarea 3"
                                }, {
                                    "id": 4,
                                    "taskName": "Tarea 4"
                                }];

                request.deferred.resolve(response);

                return request.deferred.promise;
            },

            getTasks2: function() {

                var API_URL = "http://localhost:9003/ajsoriar-demo_api/v1/";

                var deferred = $q.defer();
                var request = {};

                request.deferred = deferred;
                request.type = "GET";
                request.url = API_URL + 'tasks/';
                request.bodyData = null;

                /*

                // -- old angular versions ---

                $http.defaults.headers.common.Authorization = 'Token ' + "hdgsfhjgkh4w2369rtfh3rt34dh43r2678h4df6r476r78dh46r784dh26jr7849632hr74269r87"; // Is necessary listen to this token in the server side to maintain the session
                $http({
                    method: request.type,
                    url: request.url,
                    data: request.bodyData
                }).success(function(responseData) {

                    request.deferred.resolve(responseData);

                }).error(function(msg, code) {

                    request.deferred.reject(msg);
                });

                // -- old angular versions ---

                */

                $http({
                    method: request.type,
                    url: request.url,
                    data: request.bodyData
                }).then(function successCallback(responseData) {

                    request.deferred.resolve(responseData.data);

                }, function errorCallback(responseData) {

                    request.deferred.reject(msg);

                });

                return request.deferred.promise;

            }
        }
    }

]);

console.log("FILE: TasksServices.js was loaded.");
