'use strict';

/**
 * @ngdoc function
 * @name gspaApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the gspaApp
 */
angular.module('gspaApp')
  .controller('MainCtrl', function ($scope, appConfig, $http, $location, selectedproduct, cart, paginate) {
        $scope.products = [];

        //TODO duplication constant from back-end
        $scope.numPerPage = 12;
        $scope.currentPage = 1;
        $scope.totalItems = 0;

        var urlPage = appConfig.apiUrl + "Products";

        var requestProducts = function (page, itemsPerPage, urlPage)
        {
            urlPage = paginate.generateNavigationUrl(urlPage, page, itemsPerPage);
            
            $http({
                method: "Get",
                url: urlPage
            }).
            success(function (data, status, headers, config) {
                $scope.products = [];
                var i;
                for (i = 0; i < data.Items.length; i++) {
                    $scope.products.push(data.Items[i]);
                }

                $scope.totalItems = data.Count;
                console.log($scope.totalItems);
            }).
            error(function (data, status, headers, config) {
            })
        }

        requestProducts($scope.currentPage, $scope.numPerPage, urlPage);

        $scope.detail = function (product)
        {
            selectedproduct.setProduct(product);
            $location.path('details')
        }

        $scope.addToCart = function (product)
        {
            cart.addProduct(product, 1); //fixme
        }

        $scope.$watch('currentPage', function() {
            requestProducts($scope.currentPage, $scope.numPerPage, urlPage);
       });

  });
