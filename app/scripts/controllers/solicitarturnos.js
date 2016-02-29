'use strict';
/**
 * @ngdoc function
 * @name adamantiumMobileApp.controller:SolicitarturnosCtrl
 * @description
 * # SolicitarturnosCtrl
 * Controller of the adamantiumMobileApp
 */
angular.module('starter.adamantiumturnos',[])
 .controller('SolicitarturnosCtrl',['$scope','$http',function ($scope,$http) {  


    $scope.motivo=null;
    $scope.selectespecialidad=null;
    $scope.doctor={href:''};
    $scope.horario=null;
    $scope.listaMedicos=null;

      $scope.cargarMedicos = function()
      {
        $http({method: 'POST',
          url:'/restful/services/dom.doctor.DoctorServicio/actions/listarDoctoresActivos/invoke'})
        .then(function(data){
          //console.log(data);
          $scope.listaMedicos = data.data.result.value;
          $scope.listarAgenda($scope.listaMedicos[0].href);
        });
      };

      $scope.cargarEspecialidad=function()
      {
        $http({method: 'GET',
          url:'/restful/services/dom.turnopaciente.TurnoPacienteServicio/actions/asignarTurno/'})
        .then(function(data){
          $scope.especialidad = data.data.parameters.especialidad.choices;
        });
      };


      $scope.solicitarTurno=function()
      {
        $http({method: 'POST',
          url:'/restful/services/dom.turnopaciente.TurnoPacienteServicio/actions/sacarTurno/invoke',
          data:{
            "especialidad":{value:$scope.selectespecialidad},
            "doctor":{value:{href:$scope.doctor}},
            "horario": {value:{href:$scope.horario}}, 
            "motivoDeConsulta": {value:$scope.motivo}
          },
          headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
          }
        })
        .then(function(data){
          
        });
      };


      $scope.cargarTurnos=function()
      {
        $http({method: 'GET',
          url:'/restful/services/dom.turnopaciente.TurnoPacienteServicio/actions/asignarTurno/'})
        .then(function(data){
          $scope.especialidad = data.data.parameters.especialidad.choices;
        });
      };

      $scope.listarAgenda=function(doctor)
      {
        console.log(doctor);
        var parametros = { doctor:{
            value:{
            href:doctor
            }

            }
          };
        $http({method: 'POST',
          url:'/restful/services/dom.agendadoctor.AgendaDoctorServicio/actions/listaDoctor/invoke',
          data:parametros,
          headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
          }
        })
        .then(function(data){
          $scope.agenda = data.data.result.value;
        });
      };
      $scope.cerrarSesion = function()
      {
       
      };

  }]);