'use strict';

/* Services */

var customerServices = angular.module('gyrateCustomer.services', ['ngResource']);
customerServices.factory('Customer', ['$resource', 
    function($resource){
        return $resource('http://localhost:8080/3rdproject-sample/rest/customer', {});
    }]);
