'use strict';

/**
 * @ngdoc service
 * @name gspaApp.cart
 * @description
 * # cart
 * Factory in the gspaApp.
 */
angular.module('gspaApp')
  .factory('cart', function ($location, $cookieStore) {

      var cartfactory = {};

      var key = 'products_93c349ff';

      var products = $cookieStore.get(key);
      if (!products)
      {
          products = [];
      }

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

      var findProductIndex = function (product) {
          var i;

          for (i = 0; i < products.length; i++) {
              if (product === products[i].product) {
                  return i;
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

          $cookieStore.put(key, products);
      }

      cartfactory.deleteProduct = function (product) {
          var index = findProductIndex(product);

          if (index != undefined) {
              products.splice(index, 1);
          }

          $cookieStore.put(key, products);

          if (cartfactory.getLength() == 0)
          {
              $location.path('main');
          }
      }

      cartfactory.deleteAll = function () {
          products = [];

          $cookieStore.put(key, products);
          $location.path('main');
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
