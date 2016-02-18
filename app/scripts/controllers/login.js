'use strict';

/**
 * @ngdoc function
 * @name adamantiumMobileApp.controller:LoginCtrl
 * @description
 * # LoginCtrl
 * Controller of the adamantiumMobileApp
 */
angular.module('adamantium')
    .controller('LoginCtrl',function ($scope,$http) {
    $scope.loguearse = function()
    {
      $http({method: "GET",
        url:"http://127.0.0.1:8080/adamantium-webapp/restful/"})
      .then(function (data){
        //$scope.loguearse();
      })
      .error(function (response) {
        alert("intente nuevamente");
      });

    };
    $scope.email="";
    $scope.clave="";

  });