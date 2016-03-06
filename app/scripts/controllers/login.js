'use strict';

/**
 * @ngdoc function
 * @name adamantiumMobileApp.controller:LoginCtrl
 * @description
 * # LoginCtrl
 * Controller of the adamantiumMobileApp
 */
angular.module('starter.adamantiumlogin', [])
    .controller('LoginCtrl',['$scope','$http','$location','base64', function ($scope,$http,$location,base64) {
    


    $scope.loguearse = function()
    {

   
      $http.defaults.headers.common['Authorization'] = 'Basic ' + base64.encode($scope.email+':'+$scope.clave);
      $http({method: 'GET',
        url:'/restful/'})
      .then(function successCallback(response) {
         //$window.location = "/#/turnos/";

         $location.path('turnos');
      }, function errorCallback(response) {
    // called asynchronously if an error occurs
    
       alert('intente nuevamente');
      });
    };
    $scope.email='';
    $scope.clave='';

  }]);

