'use strict';

describe('Bank', function() {
  var bank;

  beforeEach(function() {
    bank = new Bank();
    
  });

  it('should start with a £0 balance', function() {
    expect(bank._balance).toEqual(0);
  });

  describe("'deposit' method", function() {
    it("should increase balance by £1000", function() {
      bank.deposit(1000);
      expect(bank._balance).toEqual(1000);
    });
  });

  describe("'withdraw' method", function() {
    it("should decrease the balance by £500", function() {
      bank.deposit(1000);
      bank.withdraw(500);
      expect(bank._balance).toEqual(500);
    });
  });

  describe("bank statement method", function() {

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

    it("should display transaction list headers - date,credit,debit and balance", function(){
      bank._statement;
      expect(bank._statement).toEqual(["date || credit || debit || balance"])
    });

    it("should display a deposit transaction", function(){
      bank.deposit(1000);
    
      expect(bank._statement).toEqual(["date || credit || debit || balance", `${today} || 1000 || || 1000`])
    });

    
  });

});