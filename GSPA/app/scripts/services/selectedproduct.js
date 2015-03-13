'use strict';

/**
 * @ngdoc service
 * @name gspaApp.selectedproduct
 * @description
 * # selectedproduct
 * Service in the gspaApp.
 */
angular.module('gspaApp')
  .service('selectedproduct', function () {
      var product;

      var setProduct = function (newProduct)
      {
          product = newProduct;
      }

      var getProduct = function ()
      {
          return product;
      }

      return {
          setProduct: setProduct,
          getProduct: getProduct
      };
  });
