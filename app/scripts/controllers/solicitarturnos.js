'use strict';

/**
 * @ngdoc function
 * @name adamantiumMobileApp.controller:SolicitarturnosCtrl
 * @description
 * # SolicitarturnosCtrl
 * Controller of the adamantiumMobileApp
 */
angular.module('adamantium')
 .controller('SolicitarturnosCtrl',function ($scope) {  


    $scope.motivo=null;
    $scope.especialidad=null;
    $scope.doctor=null;
    $scope.horario=null;
      $scope.solicitarTurno = function()
      {
       
        $http({method: "GET",
          url:"http://www.google.com"})
        .then(function(data){
          
        });
      };



      $scope.cerrarSesion = function()
      {
       
      };

  });