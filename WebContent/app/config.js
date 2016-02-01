myApp.config([ '$routeProvider', function($routeProvider) {
	$routeProvider
/*	.when('/login',{
		templateUrl: './app/views/login.html',
		controller: 'LoginController'
	})*/
	.when('/home', {
		templateUrl : './app/views/home.html',
		controller : 'DashController'
	})
	.otherwise({
		redirectTo : '/'
	});
} ]);
