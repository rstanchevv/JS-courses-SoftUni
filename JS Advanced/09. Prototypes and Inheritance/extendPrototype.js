class Person{
    constructor(name){
        this.name = name;
    }
}

function extendProrotype(classToExtend) {
    classToExtend.prototype.species = 'Human';
    classToExtend.prototype.toSpeciesString = function toSpeciesString(){
        return `I am a ${this.species}. ${this.toString()}`
    }
   }
extendProrotype(Person)
let a = new Person('asd');
console.log(a.species);
console.log(a.toSpeciesString())