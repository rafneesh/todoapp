myApp.controller('taskController', function($scope, TaskServices) {

  $scope.tasks = [];

  $scope.loadTasks=function(){

  		TaskServices.getSavedTasks().then(
                  function(data) {
                      $scope.tasks = data;
                   },
                   function(errResponse){
                       console.error('Error while fetching tassk');
                   }
            );
  };

  $scope.loadTasks();

  $scope.addRow = function(){
    $scope.tasks.push({ 'title':$scope.title, 'desc': $scope.desc, 'date':$scope.date, 'done':false, 'time':$scope.time });
  	$scope.title='';
  	$scope.desc='';
  	$scope.date='';
    $scope.done='';
  };
  $scope.Delete = function(title){        
    var index = -1;   
    var Arr = eval( $scope.tasks );
    for( var i = 0; i < Arr.length; i++ ) {
      if( Arr[i].title === title ) {
        index = i;
        break;
      }
    }
    
    $scope.tasks.splice( index, 1 );    
  };
  $scope.markDone = function(task){

    task.done = true;

  };
});
