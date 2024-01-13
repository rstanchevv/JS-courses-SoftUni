import { Magazine } from "./Magazine";
import { Cloth } from './Cloth'

const magazine = new Magazine('Zara', 20);
const cloth1 = new Cloth("red", 36, 'dress');

console.log(cloth1.toString())
magazine.addCloth(cloth1);
console.log(magazine.removeCloth("black"));
const cloth2 = new Cloth("brown", 34, "t-shirt");
const cloth3 = new Cloth("blue", 32, "jeans");
magazine.addCloth(cloth2);
magazine.addCloth(cloth3);
const smallestCloth = magazine.getSmallestCloth();
console.log(smallestCloth.toString())
const getCloth = magazine.getCloth("brown");
console.log(getCloth?.toString());
console.log(magazine.report());