app.controller("cadastraMedicoController", [ '$scope', 'combosService','medicoService', "$location", "$routeParams",
		function($scope, combosService,medicoService,$location,$routeParams) {
			

        $scope.situacao = ["Ocupado","Disponivel"];



        if($routeParams.id) {
            console.log($routeParams.id);
			medicoService.medicoById($routeParams.id).success(function(data){
                $scope.medico = data; 
            }).error(function(data){

            }) 
		}

       
        combosService.especialidades().success(function(data){
         $scope.especialidades = data;
		}).error(function (data){
					
		});

        combosService.ufs().success(function(data){
          $scope.ufs = data;
        }).error(function(data){

        });

        combosService.cidades().success(function(data){
           $scope.cidades = data;
        }).error(function(data){

        });

        $scope.cadastra = function(medico){
           
            if(medico.isOcupado == undefined){
                medico.isOcupado = false;
            }
            if(medico.isAtivo == undefined){
                medico.isAtivo = false;
            }

            if($routeParams.id){
                    medicoService.edita(medico).success(function(data){
                    if(data.status == 200){
                        $scope.medico = {};
                        $location.path( "/medicos" );
                    }
                    }).error(function(err){
                        console.log(err)
                    })
            }else{
                    medicoService.cadastra(medico).success(function(data){
                    if(data.status == 200){
                        $scope.medico = {};
                        $location.path( "/medicos" );
                    }
                    }).error(function(err){
                        console.log(err)
                    })
            }

        }
       $scope.cancela = function(){
            $location.path( "/medicos" );
       }
		
  			
	} ]);