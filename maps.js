//Data
var cities = [
              {
                  city : 'Harry',
                  desc : 'sweep',
                  lat : 53.002666,
                  long : -2.179404,
                  waterLevel : 100,
                  batteryLevel : 40
              },
              {
                  city : 'Lydia',
                  desc : 'sweep',
                  lat : 51.752022,
                  long : -1.257677,
                  waterLevel : 100,
                  batteryLevel : 40
              },
              {
                  city : 'George',
                  desc : 'sweep',
                  lat : 53.801277,
                  long : 1.548567,
                  waterLevel : 100,
                  batteryLevel : 40
              }
          ];

          //Angular App Module and Controller
          var app = angular.module('myApp', ['ui.router']);

          app.controller('MapCtrl', function ($scope, $http) {
            $scope.name = 'bumhole';

            var url = "harrySweeper.txt";

            $http.get(url).then(function (response) {
                          $scope.harrySweeper = response.data;
                      });

              var mapOptions = {
                  zoom: 12,
                  center: new google.maps.LatLng(51.752022, -1.257677),
                  mapTypeId: google.maps.MapTypeId.TERRAIN
              }

              $scope.map = new google.maps.Map(document.getElementById('map'), mapOptions);

              $scope.markers = [];

              var infoWindow = new google.maps.InfoWindow();

              var createMarker = function (info){

                  var marker = new google.maps.Marker({
                      map: $scope.map,
                      position: new google.maps.LatLng(info.lat, info.long),
                      title: info.city,
                      icon: 'img/swpgreen.png'
                  });
                  marker.content = '<div class="infoWindowContent"> Sweeper: ' + info.city + '</br> Water Level: ' + info.waterLevel + '</br> Battery Level: ' + info.batteryLevel + '</div>';

                  google.maps.event.addListener(marker, 'click', function(){
                      infoWindow.setContent('<h2>' + marker.title + '</h2>' + marker.content);
                      infoWindow.open($scope.map, marker);
                  });

                  $scope.markers.push(marker);

              }

              for (i = 0; i < cities.length; i++){
                  createMarker(cities[i]);
              }

              $scope.openInfoWindow = function(e, selectedMarker){
                  e.preventDefault();
                  google.maps.event.trigger(selectedMarker, 'click');
              }



          });

          app.config(function($stateProvider, $urlRouterProvider) {

            $urlRouterProvider.otherwise('/home');

            $stateProvider
            .state('home', {
              url: '/home',
              templateUrl: 'index-home.html'
            })



          });
