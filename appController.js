app.controller('appController', function($scope, $http) {

  $scope.waterLevel = 100;
  $scope.batteryLevel = 40;
  $scope.brushesDown = true;
  $scope.brushesInfo;
  $scope.SystemFaultCheckOk = true;
  $scope.check ="click system check...";
  $scope.harrySweepOverviewImage;

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

  var url = "harrySweeper.txt";

  $http.get(url).then(function (response) {
                $scope.harrySweeper = response.data;
            });
/*function to set the overview image for harry
            function setHarryOverviewImage(){
              if(harrySweeper.SystemFaultCheckOk == true){
                var img = "RSW/img/swpgreen.png";
              }else{
                var img = "RSW/img/swpred.png";
              }
              return img;
            };*/


});
