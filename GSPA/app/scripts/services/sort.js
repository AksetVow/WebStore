'use strict';

/**
 * @ngdoc service
 * @name gspaApp.sort
 * @description
 * # sort
 * Factory in the gspaApp.
 */
angular.module('gspaApp')
  .factory('sort', function () {
    var sortfactory = {};

    sortfactory.generateSortUrl = function (url, sortby, order) {
        if (url && sortby) {

            if (url.indexOf('?') !== -1) {
                return url + '&$orderby=' + sortby + order;
            }
            else {
                return url + '/?$orderby=' + sortby + order;
            }
        }
        else {
            return url;
        }
    }

    return sortfactory;
  });
