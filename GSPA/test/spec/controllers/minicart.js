'use strict';

describe('Controller: MinicartCtrl', function () {

  // load the controller's module
  beforeEach(module('gspaApp'));

  var MinicartCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    MinicartCtrl = $controller('MinicartCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
