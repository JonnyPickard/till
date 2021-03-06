'use strict';

describe('Till', function() {

  var till;

  beforeEach(function() {
    till = new Till(menu);
  });

  it('starts on a balance of 0', function() {
    expect(till.getCurrentBalance()).toEqual(0);
  });

  it('correctly adds cost to balance', function() {
    till.addCost(20);
    expect(till.getCurrentBalance()).toEqual(20);
  });

  it('adds the menu item to the tills items', function() {
    till.addItem("pizza", 2);
    expect(till.items).toEqual({ pizza: 2 });
  });

  it('raises an error if an item is not on the menu', function() {
    expect( function() { till.addItem("fake", 5); } ).toThrowError("This item doesn't exist");
  });

  it('removes the amount of item', function() {
    till.addItem("pizza", 2);
    till.removeItem("pizza", 2);
    expect(till.items).not.toEqual({ pizza: 2});
  });

  it('raises an error when trying to remove an item that is not on the bill', function() {
    till.addItem("pizza", 4);
    expect( function() { till.removeItem("pizza", 5); } ).toThrowError("This item doesn't exist");
    expect( function() { till.removeItem("spaghetti", 2); } ).toThrowError("This item doesn't exist");
  });

  it('returns the correct amount of tax', function() {
    till.balance = 15;
    expect(till.calculateTax()).toEqual(15*0.15);
  });

  it('calculates the correct total bill', function() {
    till.items = {
      pasta: 1,
      pizza: 2,
      burger: 3,
      chips: 4,
    };
    expect(till.calculateBill()).toEqual(58.65);
  });

});
