app.service("medicoService", [ '$http', function($http) {
	
    this.cadastra = function(medico) {
       
		return $http.post('http://localhost:8080/maisvida/medico/cadastra', medico);
	};

     this.lista = function() {
        
		return $http.get('http://localhost:8080/maisvida/medico/lista');
	};

     this.edita = function(medico) {
       
		return $http.put('http://localhost:8080/maisvida/medico/edita', medico);
	};

     this.medicoById = function(id) {
       
		return $http.get('http://localhost:8080/maisvida/medico/'+id);
	};

} ]);