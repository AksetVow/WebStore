'use strict';

/**
 * @ngdoc function
 * @name gspaApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the gspaApp
 */
angular.module('gspaApp')
  .controller('MainCtrl', function ($scope, appConfig, $http, $location, selectedproduct) {

      $scope.products = [];

      $scope.temp = "images/tshirt.jpg";

      var urlPage = appConfig.apiUrl + "Products";
      $http({
          method: "Get",
          url: urlPage
      }).
      success(function (data, status, headers, config)
      {
          $scope.products = [];
          console.log(data);
          var i;
          for (i = 0; i < data.Items.length; i++) {
              $scope.products.push(data.Items[i]);
          }
      }).
      error(function (data, status, headers, config)
      {
          config.log(data);
      })

      $scope.detail = function (product)
      {
          selectedproduct.setProduct(product);
          $location.path('details')
      }


  });
