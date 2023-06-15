const expect = require("chai").expect;
const flowerShop = require('../Exam  Prep/Js Advanced Final Exam - 19 February 2022/flowerShop');

describe("flowerShop", function () {
  it("calcPriceOfFlowers", function () {
    expect(flowerShop.calcPriceOfFlowers('rose', 25, 30)).to.equal('You need $750.00 to buy rose!')
    expect(flowerShop.calcPriceOfFlowers('something', 5, 6)).to.equal('You need $30.00 to buy something!')
    expect(() => flowerShop.calcPriceOfFlowers([], 5, 6)).to.throw('Invalid input!')
    expect(() => flowerShop.calcPriceOfFlowers('rose', 5.3, 6)).to.throw('Invalid input!')
    expect(() => flowerShop.calcPriceOfFlowers('rose', 5, 6.7)).to.throw('Invalid input!')
    expect(() => flowerShop.calcPriceOfFlowers('rose', 'string', 6)).to.throw('Invalid input!')
    expect(() => flowerShop.calcPriceOfFlowers('rose', 5, 'string')).to.throw('Invalid input!')
  });
  it("checkFlowersAvailable", function () {

    expect(flowerShop.checkFlowersAvailable('rose', ['rose', 'something','example'])).to.equal('The rose are available!')
    expect(flowerShop.checkFlowersAvailable('another', ['rose', 'something','example'])).to.equal('The another are sold! You need to purchase more!')
    expect(() => flowerShop.checkFlowersAvailable('rose', 5)).to.throw('gardenArr.indexOf is not a function')
  });

  it("sellFlowers", function () {
    expect(flowerShop.sellFlowers(['rose', 'flower1', 'flower2'],1)).to.equal('rose / flower2')
    expect(flowerShop.sellFlowers(['rose', 'flower1', 'flower2'],2)).to.equal('rose / flower1')
    expect(() => flowerShop.sellFlowers('string',1)).to.throw('Invalid input!')
    expect(() => flowerShop.sellFlowers('string',1.5)).to.throw('Invalid input!')
    expect(() => flowerShop.sellFlowers(['rose'],'string')).to.throw('Invalid input!')
    
  });
});
