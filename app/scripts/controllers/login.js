'use strict';

/**
 * @ngdoc function
 * @name adamantiumMobileApp.controller:LoginCtrl
 * @description
 * # LoginCtrl
 * Controller of the adamantiumMobileApp
 */
angular.module('adamantium')
    .controller('LoginCtrl',['$scope','$http','base64', function ($scope,$http,base64) {
    
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
      
      console.log(base64.encode($scope.email+$scope.clave));
      $http({method: "GET",
        url:"http://127.0.0.1:8080/restful/"})
      .then(function (data){
        //$scope.loguearse();

      })


      .error(function (response) {
        alert("intente nuevamente");
      });

    };
    $scope.email="";
    $scope.clave="";

  }]);

