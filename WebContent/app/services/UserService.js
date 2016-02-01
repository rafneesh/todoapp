myApp.factory('UserService', function($http,$q) {
  return{
  getUsers:function() {
	    return $http.get('./app/users.JSON')
	            .then(
	                    function(response){
	                        return response.data;
	                    },
	                    function(errResponse){
	                        console.error('Error while fetching users');
	                        return $q.reject(errResponse);
	                    }
	            );
	}
  }
});
