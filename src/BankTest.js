'use strict';

function Bank() {
  this._balance = 0;

};

Bank.prototype.deposit = function(money) {
  this._balance = this._balance + money;
};

