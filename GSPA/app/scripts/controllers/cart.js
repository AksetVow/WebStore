'use strict';

/**
 * @ngdoc function
 * @name gspaApp.controller:CartCtrl
 * @description
 * # CartCtrl
 * Controller of the gspaApp
 */
angular.module('gspaApp')
  .controller('CartCtrl', function ($scope, $location,  cart) {
	if (cart.getLength() == 0) {
		$location.path('main');
	}
	  
	$scope.products = function () {
		return cart.getProducts();
	}

      $scope.totalPrice = function () {
          return cart.getTotalPrice();
      }

      $scope.length = function () {
          return cart.getLength();
      }

      $scope.order = function ()
      {
          // add some call to back end
          console.log('Make order', $scope.products());
      }

      $scope.delete = function (product) {
          cart.deleteProduct(product);
      }

      $scope.deleteAll = function () {
          cart.deleteAll();
      }

  });
