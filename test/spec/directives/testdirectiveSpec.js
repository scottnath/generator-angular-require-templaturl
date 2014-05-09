/*jshint unused: vars */
define(['angular', 'angular-mocks', 'app'], function(angular, mocks, app) {
  'use strict';

  describe('Directive: testDirective', function () {

    // load the directive's module
    beforeEach(module('templateUrlTestApp.directives.Testdirective'));

    var element,
      scope;

    beforeEach(inject(function ($rootScope) {
      scope = $rootScope.$new();
    }));

    it('should make hidden element visible', inject(function ($compile) {
      element = angular.element('<test-directive></test-directive>');
      element = $compile(element)(scope);
      expect(element.text()).toBe('this sux2');
    }));
  });
});
