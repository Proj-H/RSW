var app = angular.module('myApp', ['ui.router']);

app.config(function($stateProvider, $urlRouterProvider) {

  $urlRouterProvider.otherwise('/home');

  $stateProvider
  .state('home', {
    url: '/home',
    templateUrl: 'index-home.html'
  })

  .state('george', {
    url: '/george',
    templateUrl: 'george.html'
  })

  .state('lydia', {
    url: '/lydia',
    templateUrl: 'lydia.html'
  })

  .state('harry', {
    url: '/harry',
    templateUrl: 'harry.html'
  })



})
