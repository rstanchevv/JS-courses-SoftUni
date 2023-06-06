const expect = require('chai').expect;
const lookupChar = require('../07. Unit testing and Error handling/charLookup');


describe('regular tests with correct input', function(){
    it('return s correct input', function(){
        let string = 'test';
        let index = 2;
        expect(lookupChar(string, index)).to.equal('s')
    })
    it('return s correct input', function(){
        let string = 'test';
        let index = 3;
        expect(lookupChar(string, index)).to.equal('t')
    })
    it('return s correct input', function(){
        let string = 'normal';
        let index = 3;
        expect(lookupChar(string, index)).to.equal('m')
    })
})
describe('regular tests with incorrect input', function(){
    it('incorect string return undefined', function(){
        let string = [];
        let index = 4;
        expect(lookupChar(string, index)).to.be.undefined;
    })
    it('incorect string return undefined', function(){
        let string = 5;
        let index = 4;
        expect(lookupChar(string, index)).to.be.undefined;
    })
    it('incorect index number returns undefined', function(){
        let string = `test`;
        let index = 25;
        expect(lookupChar(string, index)).to.equal('Incorrect index')
    })
    it('incorect index number returns undefined', function(){
        let string = `normal`;
        let index = 25;
        expect(lookupChar(string, index)).to.equal('Incorrect index')
    })
    it('incorect index number returns undefined', function(){
        let string = `normal`;
        let index = -23;
        expect(lookupChar(string, index)).to.equal('Incorrect index')
    })
    it('incorect index number returns undefined', function(){
        let string = `normal`;
        let index = 2.5;
        expect(lookupChar(string, index)).to.be.undefined;
    })
})