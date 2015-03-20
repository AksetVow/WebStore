'use strict';

/**
 * @ngdoc service
 * @name gspaApp.cart
 * @description
 * # cart
 * Factory in the gspaApp.
 */
angular.module('gspaApp')
  .factory('cart', function () {

      var cartfactory = {};
      
      var products = [];

      var findProduct = function (product)
      {
          var i;

          for (i = 0; i < products.length; i++) {
              if (product === products[i].product)
              {
                  return products[i];
              }
          }

          return undefined;
      }


      cartfactory.addProduct = function (product, count)
      {
          var item = findProduct(product);

          if (item) {
              item.count += count;
          }
          else {
              products.push({ product: product, count: count });
          }
      }

      cartfactory.getProducts = function () {
          return products;
      }

      cartfactory.getTotalPrice = function () {
          var i;
          var sum = 0;

          for (i = 0; i < products.length; i++)
          {
              sum += products[i].product.Price * products[i].count;
          }

          return sum;
      }

      cartfactory.getLength = function () {
          var sum = 0;
          var i;

          for (i = 0; i < products.length; i++) {
              sum += products[i].count;
          }

          return sum;
      }


      return cartfactory;
  });
