/// <reference path="namespacesAndModules.ts" />

// class Person<T> implements Greeter.Greeting<T> {
//     private name: T;
//     private age:number;

//     constructor(name: T, age: number){
//         this.name = name;
//         this.age = age;
//     }
//     introduction(): string {
//         return `My name is ${this.name} and I am ${this.age} years old.`
//     }
//     sayGoodbye(name: T): string {
//         return `Dear ${this.name}, it was a pleasure meeting you1`
//     }
// }

// let p = new Person('Ivan Ivanov', 25);

// console.log(p.introduction());

// console.log(p.sayGoodbye('Petar Petrov'));

const a = new Greeter.Example('something', 'something2');

console.log(a)