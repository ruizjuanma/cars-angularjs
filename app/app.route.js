(function () {
  "use strict";
  
  angular.module('app')
    .config(route);
  
  route.$inject = ['$locationProvider', '$routeProvider'];
  
  function route($locationProvider, $routeProvider) {
    $locationProvider
      .html5Mode(true)
      .hashPrefix('!');
    
    $routeProvider
      .when('/cars/new', {
        templateUrl: './app/views/new.view.html'
      })
      .when('/cars', {
        templateUrl: './app/views/list.view.html'
      })
      .when('/cars/filter', {
        templateUrl: './app/views/list.view.html'
      })
      .when('/cars/sort', {
        templateUrl: './app/views/list.view.html'
      })
      .when('/cars/:id', {
        templateUrl: './app/views/view.view.html'
      })
      .when('/cars/:id/edit', {
        templateUrl: './app/views/edit.view.html'
      })
      .when('/cars/:id/delete', {
        templateUrl: './app/views/delete.view.html'
      })
      .otherwise({
        redirectTo: '/cars'
      });
  }
}());