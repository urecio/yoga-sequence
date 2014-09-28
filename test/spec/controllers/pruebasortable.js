'use strict';

describe('Controller: PruebasortableCtrl', function () {

  // load the controller's module
  beforeEach(module('yogasequenceApp'));

  var PruebasortableCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    PruebasortableCtrl = $controller('PruebasortableCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
