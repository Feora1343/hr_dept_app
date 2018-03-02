let myApp = angular.module('myApp', ['ngRoute', 'ngMaterial']);

myApp.config(function($routeProvider) {
    console.log('Config Locked and Loaded!');
    $routeProvider
        .when('/addEmployee', {
            templateUrl: '/views/addEmployee.html',
            controller: 'AddEmployeeController as ae'
        })
})