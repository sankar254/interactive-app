(function(){

var app = angular.module('iApp',['ngRoute']);
	app.config(function($routeProvider, $locationProvider){
		$routeProvider
		.when("/",{
			templateUrl:'views/home.html'
		})

		.when("/ncs_one",{
			templateUrl:'views/ncs_one.html'
		});
		$locationProvider.html5Mode(true);
	});
})();