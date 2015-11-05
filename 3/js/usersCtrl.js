angular.module('myApp')
	.controller('usersCtrl', function($scope, userService){

		userService.getUsers()
			.then(function(response){
				$scope.users = response;
				console.log($scope.users);
			});






	});







