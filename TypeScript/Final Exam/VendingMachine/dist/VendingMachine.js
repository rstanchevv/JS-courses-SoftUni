"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.VendingMachine = void 0;
class VendingMachine {
    constructor(buttonCapacity) {
        this.drinks = [];
        this.buttonCapactiy = buttonCapacity;
    }
    addDrink(drink) {
        if (this.drinks.length < this.buttonCapactiy) {
            this.drinks.push(drink);
        }
    }
    removeDrink(name) {
        const drink = this.drinks.findIndex(drink => drink.name == name);
        if (drink !== -1) {
            this.drinks.splice(drink, 1);
            return true;
        }
        return false;
    }
    getLongest() {
        const drink = [...this.drinks].sort((a, b) => b.volume - a.volume)[0];
        return drink.toString();
    }
    getCheapest() {
        const drink = [...this.drinks].sort((a, b) => a.price - b.price)[0];
        return drink.toString();
    }
    buyDrink(name) {
        const drink = this.drinks.find(drink => drink.name == name);
        if (drink) {
            return drink.toString();
        }
    }
    get getCount() {
        return this.drinks.length;
    }
    report() {
        let string = `Drinks available:\n`;
        for (const drink of this.drinks) {
            string += `${drink.toString()}\n`;
        }
        return string.trim();
    }
}
exports.VendingMachine = VendingMachine;
//# sourceMappingURL=VendingMachine.js.map