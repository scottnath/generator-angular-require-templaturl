define(['angular'], function (angular) {
  'use strict';

  angular.module('generatorAngularRequireTemplaturlApp.directives.Mydirective', [])
  	.directive('myDirective', function () {
      return {
      	templateUrl: 'views/mydirective.html',
      	restrict: 'E'
      };
  	});
});
