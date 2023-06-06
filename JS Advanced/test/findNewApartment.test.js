const expect = require('chai').expect;
const findNewApartment = require('../Exam  Prep/findNewAppartment')

describe('isGoodLocation',function(){
    it('return correct answer', function(){
        expect(findNewApartment.isGoodLocation('Sofia', true)).to.equal('You can go on home tour!')
    })
    it('return correct answer', function(){
        expect(findNewApartment.isGoodLocation('Sofia', false)).to.equal('There is no public transport in area.')
    })
    it('return correct answer', function(){
        expect(findNewApartment.isGoodLocation('Plovdiv', true)).to.equal('You can go on home tour!')
    })
    it('return correct answer', function(){
        expect(findNewApartment.isGoodLocation('Plovdiv', false)).to.equal('There is no public transport in area.')
    })
    it('return correct answer', function(){
        expect(findNewApartment.isGoodLocation('Varna', true)).to.equal('You can go on home tour!')
    })
    it('return correct answer', function(){
        expect(findNewApartment.isGoodLocation('Varna', false)).to.equal('There is no public transport in area.')
    })
})
describe('isLargeEnough',function(){
    it('return correct answer',function(){
        expect(findNewApartment.isLargeEnough([26,55,43], 25)).to.equal('26, 55, 43')
    })
    it('return correct answer',function(){
        expect(findNewApartment.isLargeEnough([2,5,10,26], 25)).to.equal('26')
    })
})
describe('isItAffordable',function(){
    it('return correct answer', function(){
        expect(findNewApartment.isItAffordable(50, 60)).to.equal('You can afford this home!')
    })
    it('return correct answer', function(){
        expect(findNewApartment.isItAffordable(50, 40)).to.equal(`You don't have enough money for this house!`)
    })
})