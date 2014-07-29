'use strict';

/* Controllers */

angular.module('gyrateCustomer.controllers', [])
  .controller('MyCtrl1', ['$scope', 'Customer', function($scope, Customer) {
          
      $scope.save = function(customer) {
            Customer.save(customer);
      };

  }])
  .controller('MyCtrl2', ['$scope', function($scope) {

  }]);
