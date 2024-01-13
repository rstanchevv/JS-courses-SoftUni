// class Box<T>{
//     data: T
class CarDealer {
    constructor(dealershipName) {
        this.modelsSold = {};
        this.dealershipName = dealershipName;
        this.soldCars = 0;
    }
    sellCar(dealerId, model) {
        this.soldCars++;
        this.modelsSold[dealerId] = model;
    }
    showDetails() {
        let string = [];
        for (const car of Object.keys(this.modelsSold)) {
            string.push(`${car} sold ${this.modelsSold[car]}`);
        }
        return string.join('\n');
    }
}
let dealership = new CarDealer('SilverStar');
dealership.sellCar('BG01', 'C Class');
dealership.sellCar('BG02', 'S Class');
dealership.sellCar('BG03', 'ML Class');
dealership.sellCar('BG04', 'CLK Class');
console.log(dealership.showDetails());
//# sourceMappingURL=genericsdemo.js.map