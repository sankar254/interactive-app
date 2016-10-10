(function(){
	var app = angular.module('iApp',['ngRoute']);
	app.config(function($routeProvider){
		$routeProvider
		.when("/",{
			templateUrl:'views/home.html',
		});
	});
})()