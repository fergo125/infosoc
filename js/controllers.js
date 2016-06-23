angular.module("infosoc",['ngRoute','ui.bootstrap']);
angular.module("infosoc").controller('PreguntasController',['$scope',function($scope){
  $scope.preguntas = preguntas;
  $scope.creating = true;
  $scope.isCreating = function(){
    return $scope.creating;
  };
  $scope.toggleCreating = function(){
    creating = !creating;
  }
  $scope.newQuestion = {id:'',
                        materia:'Materia',
                        pregunta:'',
                        tipo:'desarrollo',
                        opciones : [{nombre:''},{nombre:''},{nombre:''}]
                      };
  $scope.agregarPregunta = function(){
    $scope.newQuestion.id = $scope.preguntas[$scope.preguntas.length-1].id + 1;
    $scope.preguntas.push($scope.newQuestion);
    $scope.newQuestion = {id:'',
                          materia:'Materia',
                          pregunta:'',
                          tipo:'desarrollo',
                          opciones : [{nombre:''},{nombre:''},{nombre:''}]
                        };
    creating=false;
  }

}]);
angular.module("infosoc").controller('EvaluacionesController',['$scope',function($scope){

}]);
angular.module("infosoc").controller('PracticasController',['$scope',function($scope){

}]);


var preguntas = [{id:1,materia:'Estudios Sociales',pregunta:'Quien es este pokemon?', tipo:'marque-x',opciones:[{nombre:'Pikachu'},{nombre:'Lugia'},{nombre:'Rayquaza'}]},
                  {id:2,materia:'Estudios Sociales',pregunta:'Quien es este pokemon?', tipo:'marque-x',opciones:[{nombre:'Pikachu'},{nombre:'Lugia'},{nombre:'Rayquaza'}]},
                {id:3,materia:'Ciencias',pregunta:'Por que los pinguinos no vuelan?', tipo:'desarrollo'}];
