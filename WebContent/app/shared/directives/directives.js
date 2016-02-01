myApp.directive('footer',function(){
	
	return{
		restrict: 'A',
		replace: true,
		templateUrl: "./app/shared/footer.html",
		controller:['$scope', '$filter', function ($scope, $filter) {
        }]
	}
});

myApp.directive('header',function(){
	
	return{
		restrict: 'A',
		replace: true,
		templateUrl: "./app/shared/header.html",
		controller:['$scope', '$filter', function ($scope, $filter) {
        }]
	}
})