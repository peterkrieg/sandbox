angular.module('myApp', ['ui.router', 'infinite-scroll'])
.config(function($stateProvider, $urlRouterProvider, $httpProvider){

	$stateProvider
	.state('home', {
		url: '/',
		templateUrl: 'partials/main.html',
		controller: 'mainCtrl'
	})
	.state('pictures', {
		url: '/pictures',
		templateUrl: 'partials/pictures.html',
		controller: 'mainCtrl'
	})
	.state('contact', {
		url: '/contact',
		templateUrl: 'partials/contact.html',
		controller: 'mainCtrl'
	})
	.state('users', {
		url: '/users',
		templateUrl: 'partials/users.html',
		controller: 'usersCtrl'
	});

	$urlRouterProvider.otherwise('/');






});