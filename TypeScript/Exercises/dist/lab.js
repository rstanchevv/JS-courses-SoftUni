// Car info 
class Car {
    constructor(brand, model, horsepower) {
        this._brand = brand;
        this._model = model;
        this._horsepower = horsepower;
    }
    get brand() {
        return this._brand;
    }
    get model() {
        return this._model;
    }
    get horsepower() {
        return this._horsepower;
    }
    set brand(newBrand) {
        if (newBrand == this._brand) {
            throw new Error('cannot select the same brand');
        }
        this._brand = newBrand;
    }
    set model(newModel) {
        this._model = newModel;
    }
    set horsepower(newHorsepower) {
        this._horsepower = newHorsepower;
    }
    get currentCar() {
        return `The car is: ${this._brand} ${this._model} ${this.horsepower} HP.`;
    }
}
const car = new Car('Skoda', 'Karoq', 150);
console.log(car.currentCar);
