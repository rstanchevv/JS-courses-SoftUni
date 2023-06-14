class CarDealership {
    constructor(name){
        this.name = name;
        this.availableCars = [];
        this.soldCars = [];
        this.totalIncome = 0;
    }
    addCar (model, horsepower, price, mileage){
        if(model === '' || !Number.isInteger(horsepower) || horsepower < 0 || price < 0 || mileage < 0){
            throw new Error("Invalid input!")
        }
        this.availableCars.push({model, horsepower, price, mileage})
        return `New car added: ${model} - ${horsepower} HP - ${mileage.toFixed(2)} km - ${price.toFixed(2)}$`
    }
    sellCar (model, desiredMileage) {
        let findCar = this.availableCars.find(x => x.model === model)
        let indexOfFindCar = this.availableCars.indexOf(findCar);
        if (indexOfFindCar === -1){
            throw new Error(`${model} was not found!`)
        }
        if (this.availableCars[indexOfFindCar].mileage - desiredMileage <= 0){
            
        }
         else if (this.availableCars[indexOfFindCar].mileage - desiredMileage <= 40000){
            this.availableCars[indexOfFindCar].price =  this.availableCars[indexOfFindCar].price * 0.95
        } else {
            this.availableCars[indexOfFindCar].price =  this.availableCars[indexOfFindCar].price * 0.90
        }
        let soldPrice = this.availableCars[indexOfFindCar].price;
        
        this.soldCars.push({model, horsepower: findCar.horsepower, soldPrice});
        this.availableCars.splice(indexOfFindCar, 1)
        this.totalIncome += soldPrice;

        return `${model} was sold for ${soldPrice.toFixed(2)}$`
    }
    currentCar () {
        let result = '-Available cars:\n';
        if (this.availableCars.length === 0) {
            return "There are no available cars"
        }
        for (const car of this.availableCars) {
           result += `---${car.model} - ${car.horsepower} HP - ${car.mileage.toFixed(2)} km - ${car.price.toFixed(2)}$\n`
        }
        return result.trim();
    }
    salesReport (criteria){
        let sorted;
        if (criteria !== 'horsepower' && criteria !== 'model'){
            throw new Error(`Invalid criteria!`)
        }
        if (criteria === 'horsepower'){
            sorted = this.soldCars.sort((a,b) => b.horsepower - a.horsepower)
        } else {
            sorted  = this.soldCars.sort((a,b) => a.model.localeCompare(b.model))
        }
        let result = `-${this.name} has a total income of ${this.totalIncome.toFixed(2)}$\n`
        result += `-${this.soldCars.length} cars sold:\n`;
        sorted.forEach(x => {
            result += `---${x.model} - ${x.horsepower} HP - ${x.soldPrice.toFixed(2)}$\n`
        })
        return result.trim();
    }
}
let dealership = new CarDealership('SoftAuto');
dealership.addCar('Toyota Corolla', 100, 3500, 190000);
dealership.addCar('Mercedes C63', 300, 29000, 187000);
dealership.addCar('Audi A3', 120, 4900, 240000);
dealership.sellCar('Toyota Corolla', 230000);
dealership.sellCar('Mercedes C63', 110000);
console.log(dealership.salesReport('horsepower'));


