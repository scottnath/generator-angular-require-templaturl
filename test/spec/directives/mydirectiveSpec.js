/*jshint unused: vars */
define(['angular', 'angular-mocks', 'app', 'templates/mydirective.html'], function(angular, mocks, app) {
  'use strict';

  describe('Directive: testDirective', function () {

    // load the directive's module
    beforeEach(module('templateUrlTestApp.directives.Testdirective'));

    var el,
      scope;

    beforeEach(module('views/mydirective.html'));

    beforeEach(inject(function ($rootScope, $compile) {
      el = angular.element('<my-directive></my-directive>');
      scope = $rootScope;
      $compile(el)($rootScope);
      scope.$digest();
    }));

    it('should make hidden element visible', inject(function ($compile) {
      expect(el.text()).toBe('Testy testerton');
    }));
  });
});
