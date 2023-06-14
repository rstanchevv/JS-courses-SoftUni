const expect = require("chai").expect;
const rentCar = require('../Exam  Prep/JS Advanced Exam - 13 March 2022/rentCar');

describe("rentCar", function () {
  it("searchCar", function () {

    expect(rentCar.searchCar(['firstCar', 'secondCar'], 'firstCar')).to.equal(`There is 1 car of model firstCar in the catalog!`)
    expect(() => rentCar.searchCar(['firstCar', 'secondCar'], 'other')).to.throw('There are no such models in the catalog!')
    expect(() =>rentCar.searchCar(() => ('randomString', 'firstCar')).to.throw('Invalid input!'))
    expect(() => rentCar.searchCar(() => ['firstCar', 'secondCar'], 5)).to.throw('Invalid input!')

  });
  it("calculatePriceOfCar", function () {
    expect(rentCar.calculatePriceOfCar('Audi', 35)).to.equal('You choose Audi and it will cost $1260!')
    expect(rentCar.calculatePriceOfCar('Volkswagen', 25)).to.equal('You choose Volkswagen and it will cost $500!')
    expect(rentCar.calculatePriceOfCar('Toyota', 24)).to.equal('You choose Toyota and it will cost $960!')
    expect(() => rentCar.calculatePriceOfCar('something', 35)).to.throw('No such model in the catalog!')
    expect(() => rentCar.calculatePriceOfCar('Audi', 35.6)).to.throw('Invalid input!')
    expect(() => rentCar.calculatePriceOfCar(5, 'string')).to.throw('Invalid input!')
  });

  it("checkBudget", function () {

    expect(rentCar.checkBudget(25, 5, 200)).to.equal('You rent a car!')
    expect(rentCar.checkBudget(25, 5, 100)).to.equal('You need a bigger budget!')
    expect(() => rentCar.checkBudget('string', 5, 100)).to.throw('Invalid input!')
    expect(() =>rentCar.checkBudget(5.5, 5, 100)).to.throw('Invalid input!')
    expect(() =>rentCar.checkBudget(25, 'string', 100)).to.throw('Invalid input!')
    expect(() =>rentCar.checkBudget(25, 5.5, 100)).to.throw('Invalid input!')
    expect(() =>rentCar.checkBudget(25, 5, 'string')).to.throw('Invalid input!')
    expect(() =>rentCar.checkBudget(25, 5, 5.5)).to.throw('Invalid input!')
    expect(rentCar.checkBudget(50, 2, 100)).to.equal('You rent a car!')
    expect(rentCar.checkBudget(20, 4, 100)).to.equal('You rent a car!')
    
  });
});
