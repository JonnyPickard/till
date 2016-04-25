'use strict';

describe('Till', function() {

  var till;

  beforeEach(function() {
    till = new Till();
  });

  it('starts on a balance of 0', function() {
    expect(till.balance).toEqual(0);
  });
});
