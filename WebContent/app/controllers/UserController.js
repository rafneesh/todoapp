myApp.controller('UserController', function($scope, UserService) {
	$scope.users = [];
	$scope.fetchUsers=function(){
		UserService.getUsers().then(
                function(data) {
                    $scope.users = data;
                  },
                 function(errResponse){
                     console.error('Error while fetching users');
                 }
          );
	}
	$scope.fetchUsers();
	
});
