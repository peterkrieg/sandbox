angular.module('myApp')
.service('mainService', function($http, $q){

	var url = 'http://swapi.co/api/planets/';

	function getPlanets(){
		var deferred = $q.defer();
		var planets = []; 

		var counter =0;

		return eachRequest(url);

		function eachRequest(url){
			$http.get(url)
			.then(function(response){
				counter++;
				// console.log(response.data);
				for(var i=0; i<response.data.results.length; i++){
					planets.push(response.data.results[i]);
				}
				// planets.push(response.data.results);
				// console.log(planets, );
				var nextURL = response.data.next;
				console.log(planets, nextURL);
				if(nextURL ){
					eachRequest(nextURL);
				}
				else if(nextURL===null){
					deferred.resolve(planets);
				}
				
			});
			return deferred.promise;

		}
		
	}

	this.getPlanets = getPlanets;





	// console.log(this.planets);
	


});