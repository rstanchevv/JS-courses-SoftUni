expect = require("chai").expect;
const lottery = require("../Regular Exam/01.Car Parts-Resources/lottery");

describe("lottery", function () {
  it("buyLotteryTicket", function () {
    expect(lottery.buyLotteryTicket(5, 6, true)).to.equal(`You bought 6 tickets for 30$.`)
    expect(lottery.buyLotteryTicket(3, 7, true)).to.equal(`You bought 7 tickets for 21$.`)
    expect(() => lottery.buyLotteryTicket(3, 7, false)).to.throw('Unable to buy lottery ticket!')
    expect(() => lottery.buyLotteryTicket(-3, 7, true)).to.throw(`Invalid input!`)
    expect(() => lottery.buyLotteryTicket(-3, 7, false)).to.throw('Unable to buy lottery ticket!')
    expect(() => lottery.buyLotteryTicket('string', 7, false)).to.throw('Unable to buy lottery ticket!')
    expect(() => lottery.buyLotteryTicket('string', 7, true)).to.throw(`Invalid input!`)
    expect(() => lottery.buyLotteryTicket(3, -2, true)).to.throw(`Invalid input!`)
    expect(() => lottery.buyLotteryTicket(3, -2, false)).to.throw('Unable to buy lottery ticket!')
    expect(() => lottery.buyLotteryTicket(3, 'string', false)).to.throw('Unable to buy lottery ticket!')
    expect(() => lottery.buyLotteryTicket(3, 5, 'something')).to.throw(`Invalid input!`)
  });
  it("checkTicket", function () {
    expect(lottery.checkTicket([5,6,7,8,9,10], [1,2,4,5,6,7])).to.equal('Congratulations you win, check your reward!')
    expect(lottery.checkTicket([10,20,30,40,50,60], [1,2,4,5,6,7])).to.be.undefined;
    expect(lottery.checkTicket([1,2,4,5,6,7], [1,2,4,5,6,7])).to.equal(`You win the JACKPOT!!!`)
    expect(lottery.checkTicket([1,2,10,20,30,40], [1,2,4,5,6,7])).to.be.undefined;
    expect(() => lottery.checkTicket('something', [1,2,4,5,6,7])).to.throw('Invalid input!')
    expect(() => lottery.checkTicket([1,2,10,20,30,40], 'something')).to.throw('Invalid input!')
    expect(() => lottery.checkTicket([1,2,20,30,40], [1,2,4,5,6,7])).to.throw('Invalid input!')
    expect(() => lottery.checkTicket([1,2,20,30,40,60], [2,4,5,6,7])).to.throw('Invalid input!')

  });

  it("secondChance", function () {

    
  expect(lottery.secondChance(5, [3,4,5])).to.equal('You win our second chance prize!')
  expect(lottery.secondChance(5, [3,4,6])).to.equal(`Sorry, your ticket didn't win!`)
  expect(() => lottery.secondChance('string', [3,4,6])).to.throw('Invalid input!')
  expect(() => lottery.secondChance(5, 'string')).to.throw('Invalid input!')
    
  });
});
