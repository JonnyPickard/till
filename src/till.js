function Till() {
  this.balance = 0;
  this.items = {};

  this.foodList = {
    pasta: 5,
    pizza: 7,
    burger: 8,
    chips: 2,
  };
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
  }
};
