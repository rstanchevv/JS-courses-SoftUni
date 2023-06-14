const expect = require('chai').expect;
const movieTheater = require('../Exam  Prep/movieTeather')

describe('movieTheater', function(){
    describe('method',function(){
        it('true', function(){
            expect(movieTheater.ageRestrictions('G')).to.equal('All ages admitted to watch the movie')
            expect(movieTheater.ageRestrictions('PG')).to.equal('Parental guidance suggested! Some material may not be suitable for pre-teenagers')
            expect(movieTheater.ageRestrictions('R')).to.equal('Restricted! Under 17 requires accompanying parent or adult guardian')
            expect(movieTheater.ageRestrictions('NC-17')).to.equal('No one under 17 admitted to watch the movie')
            expect(movieTheater.ageRestrictions('something else')).to.equal('There are no age restrictions for this movie')
            expect(movieTheater.ageRestrictions('something else2')).to.equal('There are no age restrictions for this movie')
        })
        it('false', function(){
            // to do
        })
    })
    describe('method2',function(){
        it('true', function(){

            expect(movieTheater.moneySpent(5, ['meal', 'snacks'], ['cola', 'sprite'])).to.equal('The total cost for the purchase with applied discount is 60.00')
            expect(movieTheater.moneySpent(5, ['Nachos', 'Popcorn'], ['Soda', 'Water'])).to.equal('The total cost for the purchase with applied discount is 71.60')
            expect(movieTheater.moneySpent(3.5 , ['Nachos', 'Popcorn'], ['Soda', 'Water'])).to.equal('The total cost for the purchase with applied discount is 53.60')
            expect(movieTheater.moneySpent(2 , ['Nachos'], ['Soda', 'Water'])).to.equal('The total cost for the purchase is 40.00')
            expect(movieTheater.moneySpent(2 , ['Nachos'], ['Soda'])).to.equal('The total cost for the purchase is 38.50')
            expect(()=>movieTheater.moneySpent('string', ['Nachos', 'Popcorn'], ['Soda', 'Water'])).to.throw('Invalid input')
            expect(()=>movieTheater.moneySpent(5, {}, ['cola', 'sprite'])).to.throw('Invalid input')
            expect(()=>movieTheater.moneySpent(5, ['Nachos', 'Popcorn'], {})).to.throw('Invalid input')
        })
        it('false', function(){
            // to do
        })
    })
    describe('method3',function(){
        it('true', function(){
            expect(movieTheater.reservation([{freeSeats: 10, rowNumber: 2}, {freeSeats: 8, rowNumber: 9}], 2)).to.equal(9)
            expect(movieTheater.reservation([{freeSeats: 10, rowNumber: 2}, {freeSeats: 3, rowNumber: 9}], 5)).to.equal(2)
            expect(movieTheater.reservation([{freeSeats: 10, rowNumber: 2}, {freeSeats: 8, rowNumber: 9}], 11)).to.equal(-Infinity)
        })
        it('false', function(){
            // to do
        })
    })
})