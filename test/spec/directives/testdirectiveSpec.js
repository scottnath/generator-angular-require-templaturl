/*jshint unused: vars */
define(['angular', 'angular-mocks', 'app', 'views/test-directive.html'], function(angular, mocks, app) {
  'use strict';

  describe('Directive: testDirective', function () {

    // load the directive's module
    beforeEach(module('templateUrlTestApp.directives.Testdirective'));

    var el,
      scope;

    beforeEach(module('views/test-directive.html'));


    beforeEach(inject(function ($rootScope, $compile) {
      el = angular.element('<test-directive></test-directive>');
      scope = $rootScope;
      $compile(el)($rootScope);
      scope.$digest();
    }));

    it('should make hidden element visible', inject(function ($compile) {
      expect(el.text()).toBe('this sux');
    }));
  });
});
