define(['angular'], function (angular) {
  'use strict';

  angular.module('templateUrlTestApp.directives.Testdirective', [])
    .directive('testDirective', function () {
      return {
        templateUrl: 'views/test-directive.html',
        restrict: 'E'
      };
    });
});
