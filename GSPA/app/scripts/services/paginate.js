'use strict';

/**
 * @ngdoc service
 * @name gspaApp.paginate
 * @description
 * # paginate
 * Factory in the gspaApp.
 */
angular.module('gspaApp')
  .factory('paginate', function () {
      var paginatefactory = {};

      paginatefactory.generateNavigationUrl = function (url, pageNumber, pageSize, sortBy) {
          var skip = (pageNumber - 1) * pageSize;
          if (!sortBy) {
              return url + '/?$skip=' + skip;
          }
          else
          {
              return url + '/?$skip=' + skip + '&$sortby=' + sortBy;
          }
      }

      return paginatefactory;
  });
