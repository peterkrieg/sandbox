angular.module('myApp')
.service('userService', function($http, $q){


	this.getUsers = function(){
		var deferred = $q.defer();

		var numResults = 2;


		var url = 'https://randomuser.me/api/?results='+numResults;

		$http.get(url).then(function(response){
			// console.log(response.data);

			deferred.resolve(response.data.results);
			// console.log(response.data.results);


		});

		return deferred.promise;






	};









});