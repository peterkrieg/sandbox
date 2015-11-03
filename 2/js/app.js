angular.module('myApp', ['ui.router'])
.config(function($stateProvider, $urlRouterProvider, $httpProvider){

	$stateProvider
	.state('home', {
		url: '/',
		templateUrl: 'partials/main.html',
		controller: 'mainCtrl',

	});

	$urlRouterProvider.otherwise('/');


});