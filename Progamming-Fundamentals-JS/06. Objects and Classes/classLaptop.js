class Laptop {
    constructor (info, quality){
        this.producer = info.producer;
        this.age = info.age;
        this.brand = info.brand;
        this.quality = quality;
        this.isOn = false;
    }
    turnOn(){
        this.quality -= 1;
        return this.isOn = true;
    }
    turnOff(){
        this.quality -= 1;
        return this.isOn = false;
    }
    showInfo(){
        let newObj = {
            producer: this.producer,
            age: this.age,
            brand: this.brand
        }
        return JSON.stringify(newObj);
    }
    get price(){
        return (800 - (this.age * 2) + (this.quality * 0.5))
    }
}
let info = {producer: "Dell", age: 2, brand: "XPS"}
let laptop = new Laptop(info, 10)
laptop.turnOn()
console.log(laptop.showInfo())
laptop.turnOff()
console.log(laptop.quality)
laptop.turnOn()
console.log(laptop.isOn)
console.log(laptop.price)
