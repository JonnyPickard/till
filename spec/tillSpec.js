'use strict';

describe('Till', function() {

  var till;

  beforeEach(function() {
    till = new Till();
  });

  it('starts on a balance of 0', function() {
    expect(till.getCurrentBalance()).toEqual(0);
  });

  it('correctly adds cost to balance', function() {
    till.addCost(20);
    expect(till.getCurrentBalance()).toEqual(20);
  });

  it('raises an error if an item is not on the menu', function() {
    expect( function() { till.addItem("fake", 5); } ).toThrowError("This item doesn't exist");
  });

  it('adds the menu item to the tills items', function() {
    till.addItem("pizza", 2);
    expect(till.items).toEqual({ pizza: 2 });
  });

});
