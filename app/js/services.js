'use strict';

/* Services */


// Demonstrate how to register services
// In this case it is a simple value service.
var customerServices = angular.module('gyrateCustomer.services', ['ngResource']);
customerServices.factory('Customer', ['$resource', 
    function($resource){
        return $resource('http://localhost:8080/3rdproject-sample/rest/customer', {});
    }]);
