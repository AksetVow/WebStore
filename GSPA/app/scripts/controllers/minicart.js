'use strict';

/**
 * @ngdoc function
 * @name gspaApp.controller:MinicartCtrl
 * @description
 * # MinicartCtrl
 * Controller of the gspaApp
 */
angular.module('gspaApp')
  .controller('MinicartCtrl', function ($scope, cart) {

      $scope.totalPrice = function() {
          return cart.getTotalPrice();
      }

      $scope.length = function () {
          return cart.getLength();
      }

      $scope.isVisible = function ()
      {
          return cart.getLength() > 0;
      }
  });
