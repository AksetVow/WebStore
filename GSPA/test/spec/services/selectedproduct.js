'use strict';

describe('Service: selectedproduct', function () {

  // load the service's module
  beforeEach(module('gspaApp'));

  // instantiate service
  var selectedproduct;
  beforeEach(inject(function (_selectedproduct_) {
    selectedproduct = _selectedproduct_;
  }));

  it('should do something', function () {
    expect(!!selectedproduct).toBe(true);
  });

});
