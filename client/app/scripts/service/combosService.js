app.service("combosService", [ '$http', function($http) {
	
    this.especialidades = function() {
        //var parameter = JSON.stringify({email:cadidato.email, senha:cadidato.senha});
		return $http.get('http://localhost:8080/maisvida/combo/especialidades');
	};

     this.ufs = function() {
        //var parameter = JSON.stringify({email:cadidato.email, senha:cadidato.senha});
		return $http.get('http://localhost:8080/maisvida/combo/ufs');
	};

     this.cidades = function() {
        //var parameter = JSON.stringify({email:cadidato.email, senha:cadidato.senha});
		return $http.get('http://localhost:8080/maisvida/combo/cidades');
	};

} ]);