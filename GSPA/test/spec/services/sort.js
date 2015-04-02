'use strict';

describe('Service: sort', function () {

  // load the service's module
  beforeEach(module('gspaApp'));

  // instantiate service
  var sort;
  beforeEach(inject(function (_sort_) {
    sort = _sort_;
  }));

  it('should do something', function () {
    expect(!!sort).toBe(true);
  });

});
