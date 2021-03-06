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
        'yogasequenceAppSequence'

  ])
  .config(function ($routeProvider) {
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
  });