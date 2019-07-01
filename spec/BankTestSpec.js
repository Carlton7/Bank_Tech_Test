'use strict';

describe('Bank', function() {
  var bank;

  beforeEach(function() {
    bank = new Bank();
  });

  it('should start with a £0 balance', function() {
    expect(bank._balance).toEqual(0);
  });

  describe("'Deposit' method", function() {
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

});