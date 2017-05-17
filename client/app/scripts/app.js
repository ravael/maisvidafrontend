var app = angular.module("maisvida", ["ngRoute"]);

app.config(function($routeProvider) {
     $routeProvider.when("/", {
                redirectTo: "/login"
              })
    .when("/login", {
        templateUrl : "app/views/login/login.html",
         controller : "loginController"
    })
    .when("/medicos", {
        templateUrl : "app/views/medicos/listaMedicos.html",
        controller : "listaMedicosController"
    })
    .when("/medicos/cadastra", {
        templateUrl : "app/views/medicos/cadastraMedicos.html",
        controller : "cadastraMedicoController"
    })
    .when("/medicos/cadastra/:id", {
        templateUrl : "app/views/medicos/cadastraMedicos.html",
        controller : "cadastraMedicoController"
    })
    .when("/medicos/visualiza/:id", {
        templateUrl : "app/views/medicos/visualizarMedico.html",
        controller : "visualizaMedicoController"})
    .otherwise({
        redirectTo: "/404"
    })
});

/*app.config(function ($httpProvider) {
  $httpProvider.defaults.headers.common = {};
  $httpProvider.defaults.headers.post = {};
  $httpProvider.defaults.headers.put = {};
  $httpProvider.defaults.headers.patch = {};
});*/



app.controller('appController', ['$scope','$location', function($scope,$location){
    $scope.logado = function() {
                var path = $location.path();
                console.log(path);
                if (path == "/login"){
//                	$('#content').removeAttr('id');
                	angular.element('#content').removeAttr('id');
                }
    }
}]);