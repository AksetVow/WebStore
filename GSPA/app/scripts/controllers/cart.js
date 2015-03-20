'use strict';

/**
 * @ngdoc function
 * @name gspaApp.controller:CartCtrl
 * @description
 * # CartCtrl
 * Controller of the gspaApp
 */
angular.module('gspaApp')
  .controller('CartCtrl', function ($scope, cart) {
      $scope.products = cart.getProducts();

      $scope.totalPrice = cart.getTotalPrice();

      $scope.length = cart.getLength();

      $scope.order = function ()
      {
          // add some call to back end
          console.log('Make order', $scope.products);
      }
  });
