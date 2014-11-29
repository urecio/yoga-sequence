'use strict';

describe('Controller: SequencecontrollerCtrl', function () {

  // load the controller's module
  beforeEach(module('yogasequenceApp'));

  var SequencecontrollerCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    SequencecontrollerCtrl = $controller('SequencecontrollerCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of sequences to the scope', function () {
    expect(scope.sequence).toBeDefined();
  });
});
