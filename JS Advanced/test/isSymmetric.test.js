const expect = require('chai').expect;
const isSymmetric = require('../07. Unit testing and Error handling/isSymmetric')


describe ('isSymmetric', function () {
    it ('test with non-array', function () {
        let arr = {};
        let result = isSymmetric(arr);
        expect(result).to.equal(false)
    });
    it ('true test symetric array odd even', function(){
        let arr = [1,2,3,3,2,1];
        let result = isSymmetric(arr);
        expect(result).to.be.true;
    }),
    it ('false test with non-symetric array eve', function(){
        let arr = [1,2,3,3];
        let result = isSymmetric(arr);
        expect(result).to.be.false;;
    }),
    it('false test with floating number', function(){
        let arr = [1,5,2,3,2];
        let result = isSymmetric(arr);
        expect(result).to.be.false;
    })
    it('true with mixed data', function (){
        let arr = [`pesho`, 12.5, 12.5, 'pesho'];
        let result = isSymmetric(arr);
        expect(result).to.be.true;
    }),
    it('true with empty array', function(){
        let arr = [];
        let result = isSymmetric(arr);
        expect(result).to.be.true;
    })
    it('false with array with string and number', function(){
        let arr = ['2', 2];
        let result = isSymmetric(arr);
        expect(result).to.be.false
    })
}
)