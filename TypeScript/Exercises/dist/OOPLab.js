// Car info 
// class Car{
//     private _brand:string
//     private _model:string
//     private _horsepower: number
//     constructor(brand:string, model:string, horsepower:number){
//         this._brand = brand;
//         this._model = model;
//         this._horsepower = horsepower;
//     }
//     get brand(){
//         return this._brand
//     }
//     get model(){
//         return this._model
//     }
//     get horsepower(){
//         return this._horsepower
//     }
//     set brand(newBrand){
//         if (newBrand == this._brand){
//             throw new Error('cannot select the same brand')
//         }
//         this._brand = newBrand
//     }
//     set model(newModel){
//         this._model = newModel
//     }
//     set horsepower(newHorsepower){
//         this._horsepower = newHorsepower
//     }
//     get currentCar(){
//         return `The car is: ${this._brand} ${this._model} ${this.horsepower} HP.`
//     }
// }
// const car = new Car('Skoda', 'Karoq', 150)
// console.log(car.currentCar)
// Opinion poll
// class Person{
//     private name: string
//     private age: number
//     constructor(name:string, age:number){
//         this.name = name,
//         this.age = age;
//     }
//     getInfo(){
//         return `${this.name} is ${this.age} years old.`
//     }
// }
// const IvanPerson = new Person('Ivan', 13)
// const MariyaPerson = new Person('Mariya', 15)
// console.log(IvanPerson.getInfo())
// console.log(MariyaPerson.getInfo())
//Bank account
// function bankAccounts(){
//     const arrOfAccounts = [];
//     class BankAccount{
//         private id: number
//         private balance: number
//         private interestRate: number
//         static idCount:number = 1;
//         constructor(id:number, balance:number, interestRate:number){
//             this.id = id;
//             this.balance = balance;
//             this.interestRate = interestRate
//         }
//         static create(){
//             const a = BankAccount.idCount++;
//             const newAccount = new BankAccount(a, 0, 0.02);
//             arrOfAccounts.push(newAccount)
//             return `Account ID${a} created`
//         }
//         static deposit(id:number, amount:number){
//             const checkForAccount = arrOfAccounts.find(x => x.id == id);
//             if (!checkForAccount){
//                 throw new Error('Account does not exist');
//             }
//             checkForAccount.balance += amount;
//             return `Deposited ${amount} to ID${checkForAccount.id}`
//         }
//         static setInterest(amount:number){
//             arrOfAccounts.forEach(x => x.interestRate = amount)
//         }
//         static getInterest(id:number, years:number){
//             const checkForAccount = arrOfAccounts.find(x => x.id == id);
//             if (!checkForAccount){
//                 throw new Error('Account does not exist');
//             }
//             const result = checkForAccount.balance * checkForAccount.interestRate * years;
//             return result.toFixed(2)
//         }
//     }
//     console.log(BankAccount.create());
//     console.log(BankAccount.create())
//     console.log(BankAccount.deposit(1, 20))
//     console.log(BankAccount.deposit(2, 10))
//     BankAccount.setInterest(1.5)
//     console.log(BankAccount.getInterest(1, 1))
//     console.log(BankAccount.getInterest(2, 1))
//     console.log(BankAccount.getInterest(3, 1))
// }
// bankAccounts();
// Hierarcihcal Inheritance;
// class Animal {
//     eat(){
//         console.log(`eating`)
//     }
// }
// class Dog extends Animal{
//     bark(){
//         console.log(`barking`)
//     }
// }
// class Cat extends Animal{
//     meow(){
//         console.log(`meowing`)
//     }
// }
// const a = new Animal();
// const b = new Dog();
// const c = new Cat();
// console.log(a.eat())
// console.log(b.bark())
// console.log(c.eat())
//# sourceMappingURL=OOPLab.js.map