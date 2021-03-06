'use strict';

/**
 * @ngdoc overview
 * @name gspaApp
 * @description
 * # gspaApp
 *
 * Main module of the application.
 */
var app = angular
  .module('gspaApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'ui.bootstrap'
  ]) 


app.config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .when('/contacts', {
        templateUrl: 'views/contacts.html',
        controller: 'ContactsCtrl'
      })
      .when('/details', {
        templateUrl: 'views/details.html',
        controller: 'DetailsCtrl'
      })	  
      .when('/delivery', {
        templateUrl: 'views/delivery.html',
        controller: 'DeliveryCtrl'
      })
      .when('/cart', {
          templateUrl: 'views/cart.html',
          controller: 'CartCtrl'
      })
      .when('/admin', {
          templateUrl: 'views/admin.html',
          controller: 'AdminCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });

app.constant({
    appConfig: {
        apiUrl: 'http://localhost:57378/'
    },
});