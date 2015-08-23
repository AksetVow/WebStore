'use strict';

/**
 * @ngdoc service
 * @name gspaApp.categories
 * @description
 * # categories
 * Factory in the gspaApp.
 */
angular.module('gspaApp')
  .factory('categories', function () {

      var result = {};

      //TODO change to backend call
	  var categories = ['Двигун', 'Підвіска', 'Трансмісія', 'Тормоза', 'Електрика', 'Система Охолодження', 'Вихлопна система', 'Фільтра'];

      result.getCategories = function (){
          return categories;
      }


      return result;
  });
