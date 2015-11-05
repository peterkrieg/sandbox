angular.module('myApp')
	.controller('usersCtrl', function($scope, userService){


		// Default value is empty array, if not already defined
		$scope.users = [];



		$scope.getUsers = function(){

			userService.getUsers()
			.then(function(response){
				var userArr = response;
				for(var i=0; i<userArr.length; i++){
					$scope.users.push(userArr[i]);
				}
				// $scope.users = response;
				console.log('scope.users is', $scope.users);
			});

		};

		// first function call to fill up some of array
		// $scope.getUsers();


		






	});







