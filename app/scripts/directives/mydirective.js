define(['angular'], function (angular) {
  'use strict';

  angular.module('templateurlApp.directives.Mydirective', [])
    .directive('myDirective', function () {
      return {
        templateUrl: 'views/mydirective.html',
        restrict: 'E'
      };
    });
});