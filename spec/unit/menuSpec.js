'use strict';

describe('Menu', function() {
  var menu;
  var joc = jasmine.objectContaining;

  beforeEach(function(){
    menu = new Menu();
  });

  it('adds the correct item to the menu', function() {
    menu.addItem("test", 4);
    expect(menu.returnFoodList()).toEqual(joc({ test: 4 }));
  });

  it('removes the correct item from the menu', function() {
    menu.addItem("test", 4);
    menu.removeItem("test", 4);
    expect(menu.returnFoodList()).not.toEqual(joc({ test: 4 }));
  });
});
