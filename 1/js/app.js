var app = angular.module('myApp', ['ngRoute']);
	

app.config(function($routeProvider, $locationProvider){
		$routeProvider
			.when('/main', {
				templateURL: 'partials/main.html',
				controller: 'mainCtrl'
			})
			.otherwise({redirectTo:'/'});



	});