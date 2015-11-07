angular.module('myApp')
.directive('animalDirective', function(){
	return {
		templateUrl: 'partials/animalDirective.html',
		scope: {
			animal: '='


		},
		controller: function($scope){
			// $scope.animal = {
			// 	name: 'bear',
			// 	age: 20,
			// };
		}





	};
});