angular.module("infosoc").controller('PreguntasController',['$scope','PreguntaService',function($scope,PreguntaService){
  $scope.preguntas = PreguntaService.getPreguntas();
  $scope.creating = true;
  $scope.isCreating = function(){
    return $scope.creating;
  };
  $scope.toggleCreating = function(){
    creating = !creating;
  }
  $scope.newQuestion = PreguntaService.newEmptyPregunta();
  $scope.agregarPregunta = function(){
    PreguntaService.addPregunta($scope.newQuestion);
    $scope.newQuestion = PreguntaService.newEmptyPregunta();
    preguntas =PreguntaService.getPreguntas();
    creating=false;
  }

}]);
angular.module("infosoc").controller('PracticasController',['$scope','PreguntaService','PracticaService',function($scope,PreguntaService,PracticaService){
  $scope.practicas = PracticaService.getPracticas();
  $scope.practicaSelected = PracticaService.getNewPractica();
  $scope.preguntasPractica = [];
  $scope.preguntasAll="";
  $scope.creating=false;
  $scope.getPreguntasPractica = function(practicaN){
    $scope.practicaSelected = practicaN;
    if($scope.practicaSelected != ""){
      preguntasId = $scope.practicaSelected.preguntas;
      $scope.preguntasPractica = [];
      $scope.preguntasAll = PreguntaService.getPreguntas().slice();
      for (var i = 0; i < preguntasId.length; i++) {
        for (var j = 0; j < $scope.preguntasAll.length; j++) {
          if (preguntasId[i].id==$scope.preguntasAll[j].id) {
            $scope.preguntasPractica.push($scope.preguntasAll[j]);
            $scope.preguntasAll.splice(j,1);
          }
        }
      }
    }
  }
  $scope.addPregunta = function(pregunta){
    PracticaService.addPreguntaToPractica($scope.practicaSelected.id,pregunta);
    $scope.getPreguntasPractica($scope.practicaSelected);

  }
  $scope.addPractica = function(){
    PracticaService.addPractica($scope.practicaSelected);
    creating=false;
    $scope.practicaSelected = PracticaService.getNewPractica();
  }
}]);
angular.module("infosoc").controller('EvaluacionesController',['$scope','PreguntaService','PracticaService',function($scope,PreguntaService,PracticaService){
  $scope.practicas = PracticaService.getPracticas();
  $scope.preguntasPractica = [];
  $scope.practicaSelected = "";



  $scope.getPreguntasPractica = function(practicaN){
    $scope.practicaSelected = practicaN;
    if($scope.practicaSelected != ""){
      preguntasId = $scope.practicaSelected.preguntas;
      $scope.preguntasPractica = [];
      $scope.preguntasAll = PreguntaService.getPreguntas().slice();
      for (var i = 0; i < preguntasId.length; i++) {
        for (var j = 0; j < $scope.preguntasAll.length; j++) {
          if (preguntasId[i].id==$scope.preguntasAll[j].id) {
            $scope.preguntasPractica.push($scope.preguntasAll[j]);
            $scope.preguntasAll.splice(j,1);
          }
        }
      }
    }
  }
}]);
