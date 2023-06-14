let expect = require('chai').expect;
let chooseYourCar = require('./chooseYourCar');


describe('car tests', () => {
    it('choosingType', () => {
        expect(() => { chooseYourCar.choosingType('Sedan', 'black', 1899) }).to.throw('Invalid Year!');
        expect(() => { chooseYourCar.choosingType('Sedan', 'black', 2023) }).to.throw('Invalid Year!');
        expect(() => { chooseYourCar.choosingType('SUV', 'black', 2020) }).to.throw('This type of car is not what you are looking for.');
        expect(chooseYourCar.choosingType('Sedan', 'red', 2010)).to.equal('This red Sedan meets the requirements, that you have.');
        expect(chooseYourCar.choosingType('Sedan', 'green', 1999)).to.equal('This Sedan is too old for you, especially with that green color.');      
    });

    it('brandName', () => {
        expect(() => { chooseYourCar.brandName('Mazda', 1) }).to.throw('Invalid Information!');
        expect(() => { chooseYourCar.brandName(['Mazda'], 'a') }).to.throw('Invalid Information!');
        expect(() => { chooseYourCar.brandName(['Mazda'], 3.1) }).to.throw('Invalid Information!');
        expect(() => { chooseYourCar.brandName(['Mazda'], 1) }).to.throw('Invalid Information!');
        expect(() => { chooseYourCar.brandName(['Mazda'], -1) }).to.throw('Invalid Information!');
        expect(chooseYourCar.brandName(['Mazda', 'BMW', 'Mercedes'], 1)).to.equal('Mazda, Mercedes');

    });

    it('carFuelConsumption', () => {
        expect(() => { chooseYourCar.carFuelConsumption('5', '5') }).to.throw('Invalid Information!');
        expect(() => { chooseYourCar.carFuelConsumption(5, '5') }).to.throw('Invalid Information!');
        expect(() => { chooseYourCar.carFuelConsumption('5', 5) }).to.throw('Invalid Information!');
        expect(() => { chooseYourCar.carFuelConsumption(0, 5) }).to.throw('Invalid Information!');
        expect(() => { chooseYourCar.carFuelConsumption(5, -1) }).to.throw('Invalid Information!');
        expect(chooseYourCar.carFuelConsumption(50, 5)).to.equal('The car burns too much fuel - 10.00 liters!'); 
        expect(chooseYourCar.carFuelConsumption(50, 3)).to.equal('The car is efficient enough, it burns 6.00 liters/100 km.'); 
        expect(chooseYourCar.carFuelConsumption(50, 10)).to.equal('The car burns too much fuel - 20.00 liters!'); 
        expect(chooseYourCar.carFuelConsumption(100, 7)).to.equal('The car is efficient enough, it burns 7.00 liters/100 km.');      

            

        
      
    });

   
});