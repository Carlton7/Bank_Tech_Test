"use strict";

function Bank() {
  this.balance = 0.00;
  this.transactions = ["date || credit || debit || balance"];
}

const movDate = new Date();
var date = (`${movDate.getDate()}/${movDate.getMonth() + 1}/${movDate.getFullYear()}`)

Bank.prototype.deposit = function(money) {
  this.balance = this.balance + money;
  var record = `${date} || ${money.toFixed(2)} || || ${this.balance.toFixed(2)}`;
  this.transactions.splice(1, 0, record);
};

Bank.prototype.withdraw = function(money) {
  this.balance = this.balance - money;
  var record = `${date} || || ${money.toFixed(2)} || ${this.balance.toFixed(2)}`;
  this.transactions.splice(1, 0, record);
};

Bank.prototype.bankStatement = function() {
  this.transactions.forEach(function(element) {
    console.log(element);
  });
};

