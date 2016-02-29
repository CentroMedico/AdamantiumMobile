'use strict';

/**
 * @ngdoc function
 * @name adamantiumMobileApp.controller:LoginCtrl
 * @description
 * # LoginCtrl
 * Controller of the adamantiumMobileApp
 */
angular.module('starter.adamantiumlogin', [])
    .controller('LoginCtrl',['$scope','$http','base64','$location', function ($scope,$http,base64,$location) {
    
      /*function Cntrl($scope, $http, Base64) {

$http.defaults.headers.common['Authorization'] = 'Basic ' + Base64.encode('----myusername----' + ':' + '----mypass---');
$http({method: 'GET', url: 'https://.../Category.json'}).
    success(function(data, status, headers, config) {
        console.log('success');
    }).
    error(function(data, status, headers, config) {
        alert(data);
        });
}*/

    $scope.loguearse = function()
    {
      
   
      $http.defaults.headers.common['Authorization'] = 'Basic ' + base64.encode($scope.email+':'+$scope.clave);
      $http({method: 'GET',
        url:'/restful/'})
      .then(function successCallback(response) {
         //$window.location = "/#/turnos/";
         console.log(response);
         $location.path('turnos');
      }, function errorCallback(response) {
    // called asynchronously if an error occurs
       alert('intente nuevamente');
      });
    };
    $scope.email='';
    $scope.clave='';

  }]);

