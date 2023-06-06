const expect = require('chai').expect;
const weddingDay = require('../Exam  Prep/weedingDay');
const weedingDay = require('../Exam  Prep/weedingDay');

describe (`pickVenue`,function(){
    it('correct input should return This venue meets the requirements, with capacity of 160 guests and 25$ cover.', function(){
        expect(weedingDay.pickVenue(160,25,'Varna')).to.equal('This venue meets the requirements, with capacity of 160 guests and 25$ cover.')
    })
    it('throw error invalid capacity if capacity is !== number', function(){
        let result = () => weddingDay.pickVenue('something', 25, 'Varna');
        expect(result).to.throw
    })
    it('throw error invalid information if priceForGuest is !== number', function(){
        let result = () => weddingDay.pickVenue(160, 'something', 'Varna');
        expect(result).to.throw
    })
    it('throw error invalid locationy is !== string', function(){
        let result = () => weddingDay.pickVenue(160, 25, 24);
        expect(result).to.throw
    })
    it('throw error invalid locationy is an empty string', function(){
        let result = () => weddingDay.pickVenue(160, 25, '');
        expect(result).to.throw
    })
    it('throw error invalid location if location is not Varna', function(){
        let result = () => weddingDay.pickVenue(160, 25, 'somewhere');
        expect(result).to.throw
    })
    it('correct input should return This venue meets the requirements, with capacity of 160 guests and 25$ cover.', function(){
        expect(weedingDay.pickVenue(140,25,'Varna')).to.equal('This venue does not meet your requirements!')
    })
    it('correct input should return This venue meets the requirements, with capacity of 160 guests and 25$ cover.', function(){
        expect(weedingDay.pickVenue(160,130,'Varna')).to.equal('This venue does not meet your requirements!')
    })
})
describe('otherSpendings',function(){
    it(`returns correct answer`, function(){
        expect(weddingDay.otherSpendings(['flowers', 'flowers'], ['pictures, video'], true)).to.equal('You spend 850$ for wedding decoration and photography with 15% discount!')
    })
    it(`returns correct answer`, function(){
        expect(weddingDay.otherSpendings(['flowers', 'nothing'], ['pictures, video'], true)).to.equal('You spend 425$ for wedding decoration and photography with 15% discount!')
    })
    it(`returns correct answer`, function(){
        expect(weddingDay.otherSpendings(['flowers', 'Fabric drapes and curtains'], ['noth, video'], true)).to.equal('You spend 765$ for wedding decoration and photography with 15% discount!')
    })
    it(`returns correct answer`, function(){
        expect(weddingDay.otherSpendings([], ['noth, video'], true)).to.equal('You spend 0$ for wedding decoration and photography with 15% discount!')
    })
describe('tableDistribution', function(){
    it('return correct answer',function(){
        expect((weddingDay.tableDistribution(5,6))).to.equal('There is only 1 people on every table, you can join some tables.')
    })
    it('return correct answer',function(){
        expect((weddingDay.tableDistribution(30,5))).to.equal('You have 5 tables with 6 guests on table.')
    })
})
})