const expect = require('chai').expect;
const isOddOrEven = require('../07. Unit testing and Error handling/evenOrOdd');

describe('Regular tests input',function(){
    it('even length string', function(){
        let string = 'test';
        expect(isOddOrEven(string)).to.equal('even')
    })
    it('odd length string', function(){
        let string = 'tes';
        expect(isOddOrEven(string)).to.equal('odd')
    })
    it('return undefined for not string input', function(){
        let string = 5;
        expect(isOddOrEven(string)).to.be.undefined;
    })
    it('return undefined for not string input', function(){
        let string = [5];
        expect(isOddOrEven(string)).to.be.undefined;
    })
})
describe ('Testing if the function works correctly', function(){
    it('test with even string', function(){
        let string = 'radoslav'
        expect(isOddOrEven(string)).to.equal('even');
    })
    it('test with even string', function(){
        let string = 'radosla'
        expect(isOddOrEven(string)).to.equal('odd')
    })
})