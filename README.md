This repository contains example code for how to be able to test directives living inside of views template files

# Testing External Templates in an AngularJS/RequireJS environment

At work we're moving into a more front-end focused world for building sites - well, we're experimenting with it at least. One of the most important parts of this attempted shift is being able to unit-test our code. I've been having a pickle of a time getting the tests to work with html templates called via Angular's templateUrl directive function.

Got it working today though!

## The setup I'm using

There's already an excellent Yeoman Generator in Aaron Allport's [Angular-Require generator](https://github.com/aaronallport/generator-angular-require), so I'm using that for scaffolding my app.

## The help I got

I went back and forth for a while with Aaron in a GitHub Issue - [Directive templateUrl templates tested from Karma](https://github.com/aaronallport/generator-angular-require/issues/24). He helped immensely, including finding a bug in [karma-ng-html2js-define-preprocessor](https://github.com/karma-runner/karma-ng-html2js-preprocessor).

## How to get it working on your system

### Start making a basic setup
```yo angular-require [app-name]```
### Don't forget to build
```grunt build```
### Add items to ./karma.conf.js
```
files: [
...
      {pattern: 'views/*.html', included: false },
...
],
...
    preprocessors: {
      'app/views/**/*.html': ['ng-html2js']
    },
    ngHtml2JsPreprocessor: {
      stripPrefix: 'app/',
    },
```
### Make changes to ./test/test-main.js
#### add *views* folder to paths:
```
    paths: {
    ...
        angular: '../bower_components/angular/angular',
        'views': '../views'
    },
```
#### add *each* template you create to the shim:
```
    shim: {
    ...
        'views/mydirective.html': {deps: ['angular']}
    },
```
### Create a directive
```yo angular-require:directive myDirective```
### Create the view
```yo angular-require:view myDirective```
### Change the directive so that it uses a templateUrl
file located: ./app/scripts/directives/mydirective.js

```
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
```
### Change the directive test file so that it can see the template file
file located: ./test/spec/directives/mydirectiveSpec.js

```
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
```
#### What's changed?
* in *define*, we've added the template in the dependencies:

```
define(['angular', 'angular-mocks', 'app', 'views/mydirective.html'], function(angular, mocks, app) {
```
* Around line 13, we link the template:

```
beforeEach(module('views/mydirective.html'));
```
* I added $digest in the it() section

```
scope.$digest();
```

* I changed what the unit test was expecting to match what was in the view template

```
expect(element.text()).toBe('This is the myDirective view.');
```


### A note on the *karma-ng-html2js-define-preprocessor* bug fix:
When that bug is fixed, you won't need to add individual templates to the ./test/test-main.js file. One less step!