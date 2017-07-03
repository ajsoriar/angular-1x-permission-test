'use strict';

app.service('ProfileServices',['$http', '$q', function($http, $q) {

        return {

            getUserData: function() {

                var API_URL = "http://localhost:9003/ajsoriar-demo_api/v1/";

                var deferred = $q.defer();
                var request = {};

                request.deferred = deferred;
                request.type = "GET";
                request.url = API_URL + 'userData/';
                request.bodyData = null;

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

                return request.deferred.promise;

            },

            saveUserData: function( userData ) {

                var API_URL = "http://localhost:9003/ajsoriar-demo_api/v1/";

                var deferred = $q.defer();
                var request = {};

                request.deferred = deferred;
                request.type = "POST";
                request.url = API_URL + 'userData/';
                request.bodyData = userData;

                /*

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

                */

                return request.deferred.promise;

            }
        }
    }

]);

console.log("FILE: ProfileServices.js was loaded.");
