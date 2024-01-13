"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Magazine = void 0;
class Magazine {
    constructor(type, capacity) {
        this.type = type;
        this.capacity = capacity;
        this.clothes = [];
    }
    addCloth(cloth) {
        if (this.clothes.length < this.capacity) {
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
exports.Magazine = Magazine;
//# sourceMappingURL=Magazine.js.map