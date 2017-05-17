app.service("loginService", [ '$http', function($http) {
	
    this.logar = function(cadidato) {
        //var parameter = JSON.stringify({email:cadidato.email, senha:cadidato.senha});
		return $http.post('http://localhost:8080/maisvida/api/login', cadidato);
	};

} ]);