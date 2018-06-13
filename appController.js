app.controller('appController', function($scope) {

  $scope.waterLevel = 100;
  $scope.batteryLevel = 40;
  $scope.brushesDown = true;
  $scope.brushesInfo;
  $scope.SystemFaultCheckOk = true;
  $scope.check ="click system check...";

  $scope.systemCheck = function(){
    if($scope.waterLevel > 10 && $scope.batteryLevel > 10 && $scope.SystemFaultCheckOk == true) {
      $scope.check = "All systems OK";
    }else{
      $scope.check = "Check Levels!";
    }
  };

  $scope.brushes = function(){
    if($scope.brushesDown == true){
      $scope.brushesInfo = "Brushes are down and working";
    }else{
      $scope.brushesInfo = "Brushes are up no work taking place";
    }
    return $scope.brushesInfo;
  };


});
