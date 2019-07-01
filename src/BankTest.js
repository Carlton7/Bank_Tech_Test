'use strict';

function Bank() {
  this._balance = 0;
  this._statement = ['date || credit || debit || balance']
};

var today = new Date();
    var dd = today.getDate();
    var mm = today.getMonth()+1; //January is 0!
    var yyyy = today.getFullYear();

    if(dd<10) {
        dd = '0'+dd
    } 

    if(mm<10) {
        mm = '0'+mm
    } 

    today = dd + '/' + mm + '/' + yyyy;

Bank.prototype.deposit = function(money) {
  this._balance = this._balance + money;
  var record = `${today} || ${money} || || ${this._balance}`
  this._statement.splice(1, 0, record);
};

Bank.prototype.withdraw = function(money) {
  this._balance = this._balance - money;
};

// Bank.prototype.bankStatement = function() {
//   console.log(6)
// };

