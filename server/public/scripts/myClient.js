const app = angular.module('myApp', ['ngRoute']); // <- Pass in angular-route module

app.config(function($routeProvider){
  $routeProvider.when('/', {
    templateUrl: 'views/getEmployees.html',
    controller: 'CarController as cc'
  }).when('/aggregate', {
    templateUrl: 'views/aggregate.html',
    controller: 'AggregateController as ac'
  }).otherwise({ template: '<h1>404 Page Not Found</h1>' });
});

