angular.module('myApp')
	.controller('mainCtrl', function($scope){

		$scope.message = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores obcaecati provident aliquam, impedit quidem iusto voluptatibus temporibus nihil error id est! Adipisci atque aut nostrum, recusandae, quae magnam repellat est.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sint distinctio autem, officia facilis molestiae veniam beatae, a deserunt laborum, optio earum laudantium atque aliquam, rerum incidunt hic repellat similique ratione?Lorem ipsum dolor sit amet, consectetur adipisicing elit. Incidunt atque amet, officiis consectetur adipisci debitis vero suscipit in doloribus, pariatur ipsa, accusantium aspernatur ab minima fugiat consequuntur distinctio, voluptates! Corrupti.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt deleniti eos quibusdam enim excepturi. Ea, aspernatur sed excepturi beatae, quod consequatur nisi, debitis blanditiis tempore vero vitae asperiores necessitatibus iure?';

		$scope.animal = {
			name: 'fox',
			age: 10,
			gender: 'male'
		};

		$scope.bird = {
			name: 'bluejay',
			age: 5
		};



	});