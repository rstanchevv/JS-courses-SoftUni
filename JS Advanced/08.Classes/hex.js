class Hex{
    constructor(number){
        this.number = number
    }
    valueOf(){
        return this.number;
    }
    toString(){
        return `0x${(this.number.toString(16)).toUpperCase()}`
    }
    plus(number){
        let a  = new Hex(this.number);
        a.number += number
        return a;
    }
    minus(number){
        let a = new Hex(this.number);
        a.number -= number;
        return a;
    }
    parse(string){
        return parseInt(string, 16)
    }
}
let FF = new Hex(255);
console.log(FF.toString());
FF.valueOf() + 1 == 256;
let a = new Hex(10);
let b = new Hex(5);
console.log(a.plus(b).toString());
console.log(a.plus(b).toString()==='0xF');
console.log(FF.parse('AAA'));


