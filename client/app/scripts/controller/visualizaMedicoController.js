app.controller("visualizaMedicoController", [ '$scope', 'medicoService', "$location", "$routeParams",
		function($scope,medicoService,$location,$routeParams) {
			
           if($routeParams.id) {
            console.log($routeParams.id);
            console.log("chamou");
			    medicoService.medicoById($routeParams.id).success(function(data){
                $scope.medico = data; 
                $scope.medico.isAtivo === true ? $scope.medico.isAtivo = "Ativo" : $scope.medico.isAtivo = "Não Ativo";
                $scope.medico.isOcupado === true ? $scope.medico.isOcupado = "Ocupado" : $scope.medico.isOcupado = "Disponível";
            }).error(function(data){

            }) 
		}

        $scope.volta = function(){
           $location.path( "/medicos" );
        }

			
		} ]);