'use strict';

describe('Directive: postureList', function () {

  // load the directive's module
  beforeEach(module('yogasequenceApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<posture-list></posture-list>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the postureList directive');
  }));
});
