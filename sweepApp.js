angular.module("sweepApp", [])
.controller("harryCtrl", function($scope) {

  $scope.waterLevel = 100;
  $scope.batteryLevel = 40;
  $scope.brushesDown = true;
  $scope.SystemFaultCheckOk = true;

  $scope.systemCheck = function(){
    if($scope.waterLevel > 10 && $scope.batteryLevel > 10 && $scope.SystemFaultCheckOk == true) {
      return "All Systems OK";
    }else{
      return "Check Levels!";
    }
  }


});
