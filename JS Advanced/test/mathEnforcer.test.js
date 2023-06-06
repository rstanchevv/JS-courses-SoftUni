const expect = require('chai').expect;
const mathEnforcer = require('../07. Unit testing and Error handling/mathEnforcer');

describe('mathEnforcer', function(){
    describe('addFive',function(){
        it ('should return undefined if num is !== number', function(){
            let num = 'string';
            expect(mathEnforcer.addFive(num)).to.be.undefined;
        })
        it ('should return 10 if num is 5', function(){
            let num = 5;
            expect(mathEnforcer.addFive(num)).to.be.equal(10)
        })
        it ('should return 5 if num is -5', function(){
            let num = -5;
            expect(mathEnforcer.addFive(num)).to.be.equal(0)
        })
        it ('should return 10.3 if num is 5.3', function(){
            let num = 5.3;
            expect(mathEnforcer.addFive(num)).to.be.approximately(10.3, 0.01)
        })
    })
    describe ('subtractTen', function(){
        it('should return undefined if num is !== number',function(){
            let num = 'string';
            expect(mathEnforcer.subtractTen(num)).to.be.undefined;
        })
        it('should return 5 if num is 15', function(){
            let num = 15;
            expect(mathEnforcer.subtractTen(num)).to.equal(5);
        })
        it('should return -20 if num is - 10', function(){
            let num = -10;
            expect(mathEnforcer.subtractTen(num)).to.equal(-20);
        })
        it(`should return 5.3 if num is 15.3`, function(){
            let num = 15.3;
            expect(mathEnforcer.subtractTen(num)).to.be.approximately(5.3, 0.01)
        })
    })
    describe('sum', function(){
        it('return undefined if num1 is not a number', function(){
            let a = 'string';
            let b = 2;
            expect(mathEnforcer.sum(a,b)).to.be.undefined
        })
        it('return undefined if num1 is not a number', function(){
            let a = 2;
            let b = 'string'
            expect(mathEnforcer.sum(a,b)).to.be.undefined;
        })
        it('returns 10 if a is 5 and b is 5', function(){
            let a = 5;
            let b = 5;
            expect(mathEnforcer.sum(a,b)).to.equal(10);
        })
        it('returns 10 if a is 5 and b is 5', function(){
            let a = -5;
            let b = -5;
            expect(mathEnforcer.sum(a,b)).to.equal(-10);
        })
        it('returns 10 if a is 5 and b is 5', function(){
            let a = 0.1;
            let b = 5;
            expect(mathEnforcer.sum(a,b)).to.be.approximately(5.1, 0.01)
        })
        it('returns 10 if a is 5 and b is 5', function(){
            let a = 5;
            let b = 0.1
            expect(mathEnforcer.sum(a,b)).to.be.approximately(5.1, 0.01)
        })
    })
})