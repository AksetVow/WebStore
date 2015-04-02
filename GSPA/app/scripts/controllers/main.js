'use strict';

/**
 * @ngdoc function
 * @name gspaApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the gspaApp
 */
angular.module('gspaApp')
  .controller('MainCtrl', function ($scope, appConfig, $http, $location, selectedproduct, cart, paginate, sort) {
        $scope.products = [];

        //TODO duplication constant from back-end
        $scope.numPerPage = 12;
        $scope.currentPage = 1;
        $scope.totalItems = 0;

        $scope.sortOrder = '';
        $scope.sortItem;

        var urlPage = appConfig.apiUrl + "Products";

        var requestProducts = function (urlPage)
        {
            urlPage = paginate.generateNavigationUrl(urlPage, $scope.currentPage, $scope.numPerPage);
            urlPage = sort.generateSortUrl(urlPage, $scope.sortItem, $scope.sortOrder);

            $http({
                method: "Get",
                url: urlPage
            }).
            success(function (data, status, headers, config) {
                $scope.products = [];
                var i;
                for (i = 0; i < data.Items.length; i++) {
                    $scope.products.push({ product: data.Items[i], count: 1 });
                }

                $scope.totalItems = data.Count;
                console.log($scope.totalItems);
            }).
            error(function (data, status, headers, config) {
            })
        }

        requestProducts(urlPage);

        $scope.detail = function (product)
        {
            selectedproduct.setProduct(product);
            $location.path('details')
        }

        $scope.addToCart = function (product, count)
        {
            if (!count || count == 0) {
                count = 1;
            }

            cart.addProduct(product, count); 
        }

        $scope.sortByItem = function ()
        {
            requestProducts(urlPage);
        }

        $scope.changeSortOrder = function ()
        {
            requestProducts(urlPage);
        }


        $scope.$watch('currentPage', function() {
            requestProducts(urlPage);
       });

  });
