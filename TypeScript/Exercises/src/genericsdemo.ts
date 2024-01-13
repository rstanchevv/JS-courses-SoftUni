// class Box<T>{
//     data: T

//     constructor(data: T){
//         this.data = data;
//     }

//     toString() {
//         return `${this.data} is of type ${typeof this.data}`;
//     }
// }

// let box1 = new Box(['test']);

// let box2 = new Box(20);

// let box3 = new Box('Hello');

// console.log(box1.toString());

// console.log(box2.toString());

// console.log(box3.toString())


// class CompareElements<T>{

//     data: T[];

//     constructor(data: T[]){
//         this.data = data;
//     }

//     compare(value: T ) {
//         let counter = 0;
//         for (const element of this.data) {
//             if (element == value){
//                 counter++
//             }
//         }
//         return counter;
//     }
// }

// let c = new CompareElements([1,2,3,1,1]);

// console.log(c.compare(1))

interface Dealership<T> {
    dealershipName: T;
    soldCars: number
}

interface Actions<K> {
    sellCar (dealerId: K, model: K): K
}

class CarDealer<T, K> implements Dealership<T>, Actions<K> {
    dealershipName: T;
    soldCars: number;
    modelsSold: object = {};

    constructor(dealershipName: T){
        this.dealershipName = dealershipName;
        this.soldCars = 0;

    }
    sellCar(dealerId: any, model: any): any {
        this.soldCars++;
        this.modelsSold[dealerId] = model;
    }
    showDetails() {
        let string = [];
        for (const car of Object.keys(this.modelsSold)) {
            string.push(`${car} sold ${this.modelsSold[car]}`)
        }
        return string.join('\n')
    }
}


let dealership = new CarDealer('SilverStar');

dealership.sellCar('BG01', 'C Class');

dealership.sellCar('BG02', 'S Class');

dealership.sellCar('BG03', 'ML Class');

dealership.sellCar('BG04', 'CLK Class');

console.log(dealership.showDetails());