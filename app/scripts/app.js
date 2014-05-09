/*jshint unused: vars */
define(['angular', 'controllers/main', 'directives/testdirective']/*deps*/, function (angular, MainCtrl, TestdirectiveDirective)/*invoke*/ {
  'use strict';

  return angular.module('templateUrlTestApp', ['templateUrlTestApp.controllers.MainCtrl',
'templateUrlTestApp.directives.Testdirective',
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
