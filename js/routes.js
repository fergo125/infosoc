angular.module("infosoc").config(function($routeProvider) {
        $routeProvider

            // route for the home page
            .when('/preguntas', {
                templateUrl : 'templates/preguntas/index.html',
                controller  : 'PreguntasController'
            })

            // route for the about page
            .when('/evaluaciones', {
                templateUrl : 'templates/evaluaciones/index.html',
                controller  : 'EvaluacionesController'
            })
            .when('/practicas', {
                templateUrl : 'templates/practicas/index.html',
                controller  : 'PracticasController'
            })
            .otherwise({
                redirectTo: '/preguntas'
            })
            // route for the contact page
    });
