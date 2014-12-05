'use strict';

/**
 * @ngdoc overview
 * @name yogasequenceApp
 * @description
 * # yogasequenceApp
 *
 * Main module of the application.
 */
angular
  .module('yogasequenceApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
        'yogasequenceAppPosturelist',
        'yogasequenceAppSequence',
        'restangular'

  ])
  .config(function ($routeProvider, RestangularProvider, apiUrl) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
        .when('/builder', {
            templateUrl: 'views/builder.html'
        })
        .when('/prueba', {
            templateUrl: 'views/pruebasortable.html'
        })
      .otherwise({
        redirectTo: '/'
      });
      RestangularProvider.setBaseUrl(apiUrl);
  })
  .constant('apiUrl', 'http://localhost:3000/api');
