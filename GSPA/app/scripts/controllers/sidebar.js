'use strict';

/**
 * @ngdoc function
 * @name gspaApp.controller:SidebarCtrl
 * @description
 * # SidebarCtrl
 * Controller of the gspaApp
 */
angular.module('gspaApp')
  .controller('SidebarCtrl', function ($scope, categories) {
      $scope.categories = categories.getCategories();

  });
