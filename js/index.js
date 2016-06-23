angular.module("MIOapp",['ngRoute']).controller('MenuController',function(){
		this.toggle = false;
		this.menuItems = menuItems;
		this.toggleMenu = function(){
				return this.toggle;
			};
		this.changeToggle = function(){
				this.toggle = !this.toggle;
			};
		});

var menuItems=[{name: 'Pronósticos', options:
					[{optionName:'Locales', url:'#pronosticosLocales'},{optionName:'Regionales', url:'#pronosticosRegionales'}],
				showOptions:false},
			   {name: 'Advertencias'},
			   {name: 'Mareas'},
			   {name: 'Contacto'}];
