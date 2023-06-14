const expect = require('chai').expect;
const carService = require('../Exam  Prep/carService')

describe(`test`, function(){
    it(`isitExpensive`, function(){
        expect(carService.isItExpensive(`asd`)).to.equal(`The overall price will be a bit cheaper`)
        expect(carService.isItExpensive(`Engine`)).to.equal(`The issue with the car is more severe and it will cost more money`)
        expect(carService.isItExpensive(`Transmission`)).to.equal(`The issue with the car is more severe and it will cost more money`)
    })
    it(`discount`, function(){
        expect(() =>carService.discount('str', 5)).to.throw('Invalid input')
        expect(() =>carService.discount(3, 'str')).to.throw('Invalid input')
        expect(() =>carService.discount([], 4)).to.throw('Invalid input')
        expect(() =>carService.discount(2, [])).to.throw('Invalid input')
        expect(carService.discount(5, 6)).to.equal(`Discount applied! You saved 0.8999999999999999$`)
        expect(carService.discount(8, 6)).to.equal(`Discount applied! You saved 1.7999999999999998$`)
        expect(carService.discount(1, 6)).to.equal('You cannot apply a discount')
        expect(carService.discount(0, 7)).to.equal('You cannot apply a discount')
    })
    it(`partsToBuy`, function(){
        expect(() => carService.partsToBuy(`asd`, [`asd`, `das`])).to.throw(`Invalid input`)
        expect(() =>carService.partsToBuy(`[asd, bsd]`, 'ssa')).to.throw(`Invalid input`)
        expect(() =>carService.partsToBuy(3, [`asd`, `das`])).to.throw(`Invalid input`)
        expect(() =>carService.partsToBuy([`asd`, `das`], 3)).to.throw(`Invalid input`)
        expect(() =>carService.partsToBuy([`asd`, `das`], 3.5)).to.throw(`Invalid input`)
        expect(() =>carService.partsToBuy(3.5, [`asd`, `das`])).to.throw(`Invalid input`)
        expect(carService.partsToBuy([{part: 'engine', price: 200}], [`engine`])).to.equal(200)
        expect(carService.partsToBuy([{part: 'engine', price: 400}], [`asd`, 'engine'])).to.equal(400)
        expect(carService.partsToBuy([{part: 'engine', price: 400}, {part: 'something', price: 200}], [`something`, 'engine'])).to.equal(600)
        expect(carService.partsToBuy([{part: 'engine', price: 400}], [`asd`, 'engine'])).to.equal(400)
    })
})