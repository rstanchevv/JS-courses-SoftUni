const expect = require('chai').expect;
const chooseYourCar = require('../Exam  Prep/chooseYourCar')

describe('chooseYourCar', function(){
    describe('choosingType', function(){
        it('choosingType', () => {
            // expect(() => { chooseYourCar.choosingType('Sedan', 'black', 1899) }).to.throw('Invalid Year!');
            // expect(() => { chooseYourCar.choosingType('Sedan', 'black', 2023) }).to.throw('Invalid Year!');
            // expect(() => { chooseYourCar.choosingType('SUV', 'black', 2020) }).to.throw('This type of car is not what you are looking for.');
            expect(chooseYourCar.choosingType('Sedan', 'red', 2010)).to.equal('This red Sedan meets the requirements, that you have.');
            expect(chooseYourCar.choosingType('Sedan', 'green', 1999)).to.equal('This Sedan is too old for you, especially with that green color.');      
        });
        it('test 1', function(){
            expect(chooseYourCar.choosingType('Sedan', 'green', 1900 )).to.equal('This Sedan is too old for you, especially with that green color.')

        })
        it('test 2', function(){
            expect(chooseYourCar.choosingType('Sedan', 'asd', 2011 )).to.equal('This asd Sedan meets the requirements, that you have.')

        })
        it('test 3', function(){
            let result = () => (chooseYourCar.choosingType('Sedan', 'green', 1899 ))
            expect(result).to.throw('Invalid Year!')
        })
        it('test 4', function(){
            let result = () => (chooseYourCar.choosingType('SUV', 'green', 2011 ))
            expect(result).to.throw('This type of car is not what you are looking for.')
        })
        it('test 5', function(){
            expect(chooseYourCar.choosingType('Sedan', 'green', 1950 )).to.equal('This Sedan is too old for you, especially with that green color.')
        })
        it('test 6', function(){
            let result = () => (chooseYourCar.choosingType('asd', 'green', 2024 ))
            expect(result).to.throw('Invalid Year!')
        })
        it('test 7', function(){
            expect(chooseYourCar.choosingType('Sedan', 'bsd`', 2011 )).to.equal('This bsd Sedan meets the requirements, that you have.')

        })
    })
    describe('brandName', function(){
        it('test 1', function(){
            expect(chooseYourCar.brandName(['asd', 'bsd'], 1)).to.equal('asd')
        })
        it('test 2', function(){
            let result = () => chooseYourCar.brandName([], 1);
            expect(result).to.throw;
            
        })
        it('test 3', function(){
            expect(chooseYourCar.brandName(['asd', 'bsd', 'csd', 'dsd', 'gsd'], 2)).to.equal('asd, bsd, dsd, gsd')
        })
        it('test 4', function(){
            let result = () =>  chooseYourCar.brandName('asd', 2)
            expect(result).to.throw
            
        })
        it('test 5', function(){
            let result = () =>  chooseYourCar.brandName(['asd','basd'], 'string')
            expect(result).to.throw
        })
        it('test 6', function(){
            let result = () =>  chooseYourCar.brandName(['asd','basd'], 6)
            expect(result).to.throw
        })
        it('test 7', function(){
            let result = () =>  chooseYourCar.brandName('string', 6)
            expect(result).to.throw
        })
        it('test 8', function(){
            expect(chooseYourCar.brandName(['asd', 'bsd', 'csd', 'dsd', 'gsd','sdsa','dawdas','dwasa'], 3)).to.equal('asd, bsd, csd, gsd, sdsa, dawdas, dwasa')
        })
        it('test 9', function(){
            let result = () =>  chooseYourCar.brandName(['Mazda','BMW'], 6.5)
            expect(result).to.throw
        })
        
    })
    describe('carFuelConsumption', function(){
        it('test 1', function(){
            expect(chooseYourCar.carFuelConsumption(100,200)).to.equal('The car burns too much fuel - 200.00 liters!')
        })
        it('test 2', function(){
            expect(chooseYourCar.carFuelConsumption(200,5)).to.equal('The car is efficient enough, it burns 2.50 liters/100 km.')
        })
        it('test 3', function(){
            let result = () => chooseYourCar.carFuelConsumption('string',5);
            expect(result).to.throw
        })
        it('test 4', function(){
            let result = () => chooseYourCar.carFuelConsumption(200,'string');
            expect(result).to.throw
        })
        it('test 5', function(){
            expect(chooseYourCar.carFuelConsumption(10,2)).to.equal('The car burns too much fuel - 20.00 liters!')

        })
        it('test 6', function(){
            expect(chooseYourCar.carFuelConsumption(30,2)).to.equal('The car is efficient enough, it burns 6.67 liters/100 km.')
        })
        it('test 7', function(){
            let result = chooseYourCar.carFuelConsumption(-32, 5);
            expect(result).to.throw;
        })
        it('test 8', function(){
            let result = chooseYourCar.carFuelConsumption(5, -32);
            expect(result).to.throw;
        })
        it('test 9', function(){
            let result = chooseYourCar.carFuelConsumption('string', 20);
            expect(result).to.throw;
        })
        it('test 10', function(){
            let result = chooseYourCar.carFuelConsumption(20, 'string');
            expect(result).to.throw;
        })
        it('test 11',function(){
            expect(chooseYourCar.carFuelConsumption(50, 5)).to.equal('The car burns too much fuel - 10.00 liters!'); 
            expect(chooseYourCar.carFuelConsumption(50, 3)).to.equal('The car is efficient enough, it burns 6.00 liters/100 km.'); 
            expect(chooseYourCar.carFuelConsumption(50, 10)).to.equal('The car burns too much fuel - 20.00 liters!'); 
            expect(chooseYourCar.carFuelConsumption(100, 7)).to.equal('The car is efficient enough, it burns 7.00 liters/100 km.');   
        })
    })
})