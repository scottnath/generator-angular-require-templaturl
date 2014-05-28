/*jshint unused: vars */
define(['angular', 'angular-mocks', 'app', 'views/mydirective.html'], function(angular, mocks, app) {
  'use strict';

  describe('Directive: myDirective', function () {

    // load the directive's module
    beforeEach(module('templateurlApp.directives.Mydirective'));

    var element,
      scope;

    beforeEach(module('views/mydirective.html'));
    beforeEach(inject(function ($rootScope) {
      scope = $rootScope.$new();
    }));

    it('should make hidden element visible', inject(function ($compile) {
      element = angular.element('<my-directive></my-directive>');
      element = $compile(element)(scope);
      scope.$digest();
      expect(element.text()).toBe('This is the myDirective view.');
    }));
  });
});
