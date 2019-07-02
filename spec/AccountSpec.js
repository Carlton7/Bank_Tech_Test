'use strict';

describe('Bank', function() {
  var bank;

  beforeEach(function() {
    bank = new Bank(); 
  });

  it('should start with a £0 balance', function() {
    expect(bank.balance).toEqual(0);
  });

  describe("'deposit' method", function() {
    it("should increase balance by £1000", function() {
      bank.deposit(1000);
      expect(bank.balance).toBeCloseTo(1000.00, 2);
    });
  });

  describe("'withdraw' method", function() {
    it("should decrease the balance by £500", function() {
      bank.deposit(1000);
      bank.withdraw(500);
      expect(bank.balance).toBeCloseTo(500.00, 2);
    });
  });

  describe("bank statement method", function() {

    const movDate = new Date();
    var date = (`${movDate.getDate()}/${movDate.getMonth() + 1}/${movDate.getFullYear()}`)

    it("should display transaction list headers - date,credit,debit and balance", function(){
      bank.transactions;
      expect(bank.transactions).toEqual(["date || credit || debit || balance"])
    });

    it("should display a deposit transaction", function(){
      bank.deposit(1000);
    
      expect(bank.transactions).toEqual(["date || credit || debit || balance", `${date} || 1000.00 || || 1000.00`])
    });

    it("should display a withdraw transaction + check decimal points on both deposit and withdraw", function(){
      bank.deposit(1000);
      bank.withdraw(250);
    
      expect(bank.transactions).toEqual(["date || credit || debit || balance", `${date} || || 250.00 || 750.00`, `${date} || 1000.00 || || 1000.00`])
    });
  });
});