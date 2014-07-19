'use strict';

/* Services */


// Demonstrate how to register services
// In this case it is a simple value service.
var customerServices = angular.module('gyrateCustomer.services', [ngResource]);
customerServices.factory('Customer', ['$resource', 
    function($resource){
        return $resource('/customer', {}, {
            query: {method: 'GET', params:{customerId:'customers'}, isArray:true},
            save: {method: 'POST'}
        });
    }]);
