
angular.module("MIOapp",['ngRoute']).controller('MenuController',['$scope',function($scope){
		$scope.toggle = false;
		$scope.menuItems = menuItems;
		$scope.toggleMenu = function(){
				return $scope.toggle;
			};
		$scope.changeToggle = function(){
				$scope.toggle = !$scope.toggle;
			};
		}]);

var menuItems=[{name: 'Pronósticos', 
                    options:[{optionName:'Locales', 
                              url:'#pronosticosLocales'},
                             {optionName:'Regionales', 
                              url:'#pronosticosRegionales'}, ],
                showOptions:false,icon:'css/drawable-hdpi/icon_forecast.png'},
			   {name: 'Advertencias',icon:'css/drawable-hdpi/icon_warning.png'},
			   {name: 'Mareas',icon:'css/drawable-hdpi/icon_tide.png'},
			   {name: 'Contacto',icon: 'css/drawable-hdpi/icon_contact.png'},
               {name: 'Quiénes somos', icon: 'css/drawable-hdpi/icon_about.png'}];
