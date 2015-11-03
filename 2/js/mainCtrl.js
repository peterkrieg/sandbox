angular.module('myApp')
.controller('mainCtrl', function($scope, mainService){

	$scope.message = 'hello';

	// $scope.planets = mainService.getPlanets()
	// 	.then(function(result){
	// 		$scope.planets = result;
	// 		console.log($scope.planets);
	// 	});

mainService.getPlanets()
.then(function(response){
	$scope.planets = response;
	// console.log($scope.planets);
});







});











