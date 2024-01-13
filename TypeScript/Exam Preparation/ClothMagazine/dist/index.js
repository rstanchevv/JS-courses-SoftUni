"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Magazine_1 = require("./Magazine");
const Cloth_1 = require("./Cloth");
const magazine = new Magazine_1.Magazine('Zara', 20);
const cloth1 = new Cloth_1.Cloth("red", 36, 'dress');
console.log(cloth1.toString());
magazine.addCloth(cloth1);
console.log(magazine.removeCloth("black"));
const cloth2 = new Cloth_1.Cloth("brown", 34, "t-shirt");
const cloth3 = new Cloth_1.Cloth("blue", 32, "jeans");
magazine.addCloth(cloth2);
magazine.addCloth(cloth3);
const smallestCloth = magazine.getSmallestCloth();
console.log(smallestCloth.toString());
const getCloth = magazine.getCloth("brown");
console.log(getCloth === null || getCloth === void 0 ? void 0 : getCloth.toString());
console.log(magazine.report());
//# sourceMappingURL=index.js.map