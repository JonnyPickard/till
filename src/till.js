function Till() {
  this.balance = 0;
}

Till.prototype.getCurrentBalance = function() {
  return this.balance;
};

Till.prototype.addCost = function(amount) {
  this.balance += amount;
};
