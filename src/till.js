function Menu() {
  this.foodList = {
    pasta: 5,
    pizza: 7,
    burger: 8,
    chips: 2,
  };
}

Menu.prototype.returnFoodList = function() {
  return this.foodList;
};

Menu.prototype.printFoodList = function() {
  str = this.foodList;
  for (var key in str) {
    if (str.hasOwnProperty(key)) {
      return(key + ": " + str[key]);
    }
  }
};

Menu.prototype.addItem = function(item, price) {
  this.foodList[item] = price;
};

Menu.prototype.removeItem = function(item, price) {
  delete this.foodList[item];
};

var menu = new Menu();

function Till(Menu) {
  this.balance = 0;
  this.items = {};

  this.foodList = menu.returnFoodList();
}

Till.prototype.getCurrentBalance = function() {
  return this.balance;
};

Till.prototype.addCost = function(amount) {
  this.balance += amount;
};

Till.prototype.addItem = function(item, amount) {
  if(!(item in this.foodList)) {
    throw new TypeError("This item doesn't exist");
  } else {
    this.items[item] = amount;
  }
};

Till.prototype.removeItem = function(item, amount) {
  if(!(item in this.items) || (this.items[item] - amount) < 0) {
    throw new TypeError("This item doesn't exist");
  } else {
    this.items[item] -= amount;
  }
};

Till.prototype.calculateTax = function() {
  return this.balance * 0.15;
};

Till.prototype.calculateBill = function() {
  for (var key in this.items){
    this.addCost(this.foodList[key] * this.items[key]);
  }
  this.addCost(this.calculateTax());
  return this.getCurrentBalance();
};
