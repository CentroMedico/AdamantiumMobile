'use strict';

/**
 * @ngdoc function
 * @name adamantiumMobileApp.controller:LoginCtrl
 * @description
 * # LoginCtrl
 * Controller of the adamantiumMobileApp
 */
angular.module('starter.adamantiumlogin', ['config'])
    .controller('LoginCtrl',['$scope','$http','$location','base64','ENV', function ($scope,$http,$location,base64,ENV) {
    


    $scope.loguearse = function()
    {

   
      $http.defaults.headers.common['Authorization'] = 'Basic ' + base64.encode($scope.email+':'+$scope.clave);
      $http({method: 'GET',
        url:ENV.apiEndpoint+'/restful/'})
      .then(function successCallback(response) {
         //$window.location = "/#/turnos/";

         $location.path('turnos');
      }, function errorCallback(response) {
    // called asynchronously if an error occurs
    
       alert(ENV.apiEndpoint+'/restful/'+'intente nuevamente'+response.data);
      });
    };
    $scope.email='';
    $scope.clave='';

  }]);

