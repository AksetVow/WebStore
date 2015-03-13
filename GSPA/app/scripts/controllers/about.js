'use strict';

/**
 * @ngdoc function
 * @name gspaApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the gspaApp
 */
angular.module('gspaApp')
  .controller('AboutCtrl', function ($scope) {
  console.log ("ABOUT!!!");
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
