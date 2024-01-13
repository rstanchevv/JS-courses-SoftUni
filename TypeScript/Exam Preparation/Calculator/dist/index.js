"use strict";
// Calculator
// function calculator(number:number, operator: '+' | '-' | '/' | '*', anotherNumber:number){
//     const operatorLib: {[key:string]: number} ={
//         '+': number + anotherNumber,
//         '-': number - anotherNumber,
//         '/': number / anotherNumber,
//         '*': number * anotherNumber
//     }
//     console.log(operatorLib[operator].toFixed(2))
// }
// calculator(7, '*', 5)
// Lowest Prices in Cities
// function solve(arr: string[]) {
//   const objOfProducts: { [key: string]: { city: string; price: number } } = {};
//   for (const entry of arr) {
//     const splitElement = entry.split("|");
//     let city: string = splitElement[0];
//     let product: string = splitElement[1];
//     let price: number = Number(splitElement[2]);
//     if (objOfProducts.hasOwnProperty(product)) {
//       if (price < objOfProducts[product].price) {
//         objOfProducts[product].price = price;
//         continue;
//       }
//     } else {
//       objOfProducts[product] = {
//         city,
//         price,
//       };
//     }
//   }
//   for (const product of Object.keys(objOfProducts)) {
//     console.log(
//       `${product} -> ${objOfProducts[product].price} (${objOfProducts[product].city})`
//     );
//   }
// }
// solve([
//   "Sample Town | Sample Product | 1000",
//   "Sample Town | Orange | 2",
//   "Sample Town | Peach | 1",
//   "Sofia | Orange | 3",
//   "Sofia | Peach | 2",
//   "New York | Sample Product | 1000.1",
//   "New York | Burger | 10",
// ]);
class Cloth {
    constructor(color, size, type) {
        this.color = color;
        this.size = size;
        this.type = type;
    }
    toString() {
        return `${this.type} with size ${this.size}, color ${this.color}`;
    }
}
class Magazine {
    constructor(type, capacity) {
        this.type = type;
        this.capacity = capacity;
        this.clothes = [];
    }
    addCloth(cloth) {
        if (this.capacity > 0) {
            this.clothes.push(cloth);
        }
    }
    removeCloth(color) {
        const foundCloth = this.clothes.find(x => x.color == color);
        if (foundCloth) {
            const index = this.clothes.indexOf(foundCloth);
            this.clothes.splice(index, 1);
            return true;
        }
        else {
            return false;
        }
    }
    getSmallestCloth() {
        return this.clothes.reduce((prev, curr) => prev.size < curr.size ? prev : curr);
    }
    getCloth(color) {
        return this.clothes.find(cloth => cloth.color == color);
    }
    getClothCount() {
        return this.clothes.length;
    }
    report() {
        let string = `${this.type} magazine contains:\n`;
        const sortedArray = this.clothes.sort((a, b) => a.size - b.size);
        for (const cloth of sortedArray) {
            string += `${cloth}\n`;
        }
        return string.trim();
    }
}
const magazine = new Magazine('Zara', 20);
const cloth1 = new Cloth("red", 36, 'dress');
console.log(cloth1.toString());
magazine.addCloth(cloth1);
console.log(magazine.removeCloth("black"));
const cloth2 = new Cloth("brown", 34, "t-shirt");
const cloth3 = new Cloth("blue", 32, "jeans");
magazine.addCloth(cloth2);
magazine.addCloth(cloth3);
const smallestCloth = magazine.getSmallestCloth();
console.log(smallestCloth.toString());
const getCloth = magazine.getCloth("brown");
console.log(getCloth === null || getCloth === void 0 ? void 0 : getCloth.toString());
console.log(magazine.report());
//# sourceMappingURL=index.js.map