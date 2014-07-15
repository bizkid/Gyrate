'use strict';


// Declare app level module which depends on filters, and services
angular.module('gyrateCustomer', [
  'ngRoute',
  'gyrateCustomer.filters',
  'gyrateCustomer.services',
  'gyrateCustomer.directives',
  'gyrateCustomer.controllers'
]).
config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/create', {templateUrl: 'partials/createCustomer.html', controller: 'MyCtrl1'});
  $routeProvider.when('/search', {templateUrl: 'partials/partial2.html', controller: 'MyCtrl2'});
  $routeProvider.otherwise({redirectTo: '/view1'});
}]);
