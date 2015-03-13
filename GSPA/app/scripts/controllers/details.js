'use strict';

/**
 * @ngdoc function
 * @name gspaApp.controller:DetailsCtrl
 * @description
 * # DetailsCtrl
 * Controller of the gspaApp
 */
angular.module('gspaApp')
  .controller('DetailsCtrl', function ($scope, $location, selectedproduct) {
      $scope.product = selectedproduct.getProduct();

      if (!$scope.product)
      {
          $location.path('main')
      }

  });
