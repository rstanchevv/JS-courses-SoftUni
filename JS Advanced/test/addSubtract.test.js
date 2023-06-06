const expect = require('chai').expect;
const createCalculator = require('../07. Unit testing and Error handling/addSubtract');

describe ('Successful tests', function(){
    it(`returns an object with all methods as expected`, function(){
        let result = createCalculator()
        expect(result).to.have.all.keys('add','subtract','get')
    })
    it(`returns an object`, function(){
        let result = createCalculator()
        let object = {};
        expect(typeof result).to.equal(typeof object)
    })
    it('add and subract takes a correct parameter', function(){
        let result = createCalculator();
        let add = result.add(5);
        let subract = result.subtract(3);
        expect(result.get()).to.equal(2)
    })
    it('initial result is 0', function(){
        let result = createCalculator();
        expect(result.get()).to.equal(0)
    })
    it('add 5 to result', function(){
        let result = createCalculator();
        result.add(5)
        expect(result.get()).to.equal(5)
    })
    it('subtract 5 from result', function(){
        let result = createCalculator();
        result.subtract(5)
        expect(result.get()).to.equal(-5)
    })
})
describe ('Unsuccessful tests', function(){
    it('function with parameter does nothing', function(){
        let result = createCalculator(5);
        expect(result).to.have.all.keys('add','subtract','get')
    })
    it('value cannot be accessed', function(){
        let result = createCalculator();
        expect(result.value).to.be.undefined
    })
    it('wrong parameter to add', function(){
        let result = createCalculator();
        result.add({});
        expect(result.get()).to.be.NaN
    })
    it('wrong parameter to add', function(){
        let result = createCalculator();
        result.subtract({});
        expect(result.get()).to.be.NaN
    })
})