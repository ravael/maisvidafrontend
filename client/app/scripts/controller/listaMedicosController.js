app.controller("listaMedicosController", [ '$scope', 'medicoService',
		function($scope,medicoService) {
			
        medicoService.lista().success(function(data){
                $scope.medicos = data;
                console.log(data);
            }).error(function(data){

            })

			
		} ]);