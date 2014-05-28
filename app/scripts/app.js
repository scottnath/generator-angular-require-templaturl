/*jshint unused: vars */
define(['angular', 'controllers/main', 'directives/mydirective']/*deps*/, function (angular, MainCtrl, MydirectiveDirective)/*invoke*/ {
  'use strict';

  return angular.module('templateurlApp', ['templateurlApp.controllers.MainCtrl',
'templateurlApp.directives.Mydirective',
/*angJSDeps*/
  'ngCookies',
  'ngResource',
  'ngSanitize',
  'ngRoute'
])
    .config(function ($routeProvider) {
      $routeProvider
        .when('/', {
          templateUrl: 'views/main.html',
          controller: 'MainCtrl'
        })
        .otherwise({
          redirectTo: '/'
        });
    });
});
