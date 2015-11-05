angular.module('myApp')
.service('userService', function($http, $q){


	this.getUsers = function(){
		var deferred = $q.defer();

		var url = 'https://randomuser.me/api/?results=7';

		$http.get(url).then(function(response){
			// console.log(response.data);

			deferred.resolve(response.data.results);


		});

		return deferred.promise;






	};









});