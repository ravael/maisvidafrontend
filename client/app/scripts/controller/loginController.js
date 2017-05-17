app.controller("loginController", [ '$scope', 'loginService',"$location",
		function($scope, loginService,$location) {
			
	$scope.login = function(candidato) {
                  
				loginService.logar(candidato).success(function(data){
                    console.log(data);
					if(data != undefined){
                       $location.path( "/medicos" );
                    }
				}).error(function (data){
					$location.path( "/login" );
				});
			}
			
		} ]);