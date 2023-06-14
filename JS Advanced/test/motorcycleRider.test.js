const expect = require('chai').expect;
const motorcycleRider = require('../Exam  Prep/motorcycleRider')

describe('motorcycleRider', function(){
    describe('licenseRestriction', function(){
        it('returns correct answer', function(){
            expect(motorcycleRider.licenseRestriction("AM")).to.equal('Mopeds with a maximum design speed of 45 km. per hour, engine volume is no more than 50 cubic centimeters, and the minimum age is 16.')
        })
        it('returns correct answer', function(){
            expect(motorcycleRider.licenseRestriction("A1")).to.equal('Motorcycles with engine volume is no more than 125 cubic centimeters, maximum power of 11KW. and the minimum age is 16.')
        })
        it('test 3', function(){
            expect(motorcycleRider.licenseRestriction("A2")).to.equal('Motorcycles with maximum power of 35KW. and the minimum age is 18.')
        })
        it('test 4', function(){
            expect(motorcycleRider.licenseRestriction("A")).to.equal('No motorcycle restrictions, and the minimum age is 24.')
        })
        it('test 5', function(){
            let result = () => motorcycleRider.licenseRestriction("random")
            expect(result).to.throw;
        })
    })
    describe('motorcycleShowroom', function(){
        it('returns correct answer', function(){
            expect(motorcycleRider.motorcycleShowroom([70,59,58,41], 60)).to.equal(`There are 2 available motorcycles matching your criteria!`)
        })
        it('returns correct answer', function(){
            expect(motorcycleRider.motorcycleShowroom([50], 60)).to.equal(`There are 1 available motorcycles matching your criteria!`)
        })
        it('returns correct answer', function(){
            expect(motorcycleRider.motorcycleShowroom([80,90], 60)).to.equal(`There are 0 available motorcycles matching your criteria!`)
        })
        it('throws error', function(){
            let result = () => motorcycleRider.motorcycleShowroom([], 60)
            expect(result).to.throw
        })
        it('test 5', function(){
            
        })
    })
    describe('otherSpendings', function(){
        it('test 1', function(){
            expect((motorcycleRider.otherSpendings(['jacked'], ['engine oil, oil filter'], true))).to.equal('You spend $270.00 for equipment and consumables with 10% discount!')
        })
        it('test 2', function(){
            expect((motorcycleRider.otherSpendings(['helmet', 'jacked'], ['engine oil', 'oil filter'], true))).to.equal('You spend $540.00 for equipment and consumables with 10% discount!')
        })
        it('test 3', function(){
            expect((motorcycleRider.otherSpendings(['helmet','jacked'], ['engine oil', 'oil filter'], false))).to.equal('You spend $600.00 for equipment and consumables!')
        })
        it('test 4', function(){
            expect((motorcycleRider.otherSpendings(['helmet', 'jacked'], ['engine oil'], false))).to.equal('You spend $570.00 for equipment and consumables!')
        })
        it('test 5', function(){
            
        })
    })
})