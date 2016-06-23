angular.module('MIOapp').controller('PronosticosRegionalesController',['$scope',function($scope){
	    $scope.regiones = regiones;
	}]);
var regiones = [{name:'Pacifico Norte-Norte', image:'css/drawable-hdpi/map_norte_pacifico_norte_mini.png'},
               {name:'Pacifico Norte-Centro', image:'css/drawable-hdpi/map_centro_pacifico_norte_mini.png'},
               {name:'Pacifico Norte-Sur', image:'css/drawable-hdpi/map_sur_pacifico_norte_mini.png'},
               {name:'Puntarenas', image:'css/drawable-hdpi/map_puntarenas_mini.png'},
               {name:'Pacifico Central', image:'css/drawable-hdpi/map_pacifico_central_mini.png'},
               {name:'Pacifico Sur', image:'css/drawable-hdpi/map_pacifico_sur_mini.png'},
               {name:'Caribe', image:'css/drawable-hdpi/map_caribe_mini.png'}
               ];