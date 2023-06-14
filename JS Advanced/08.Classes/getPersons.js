function getPersons(){
    let arrOfPersons = [];
    class Person {
        constructor(firstName, lastName, age, email){
            this.firstName = firstName;
            this.lastName = lastName;
            this.age = age;
            this.email = email;
        }
        toString(){
            return `${this.firstName} ${this.lastName} (age: ${this.age}, email: ${this.email})`
        }
    }

    let annaPerson = new Person('Anna', "Simpson", 22, 'anna@yahoo.com')
    let softUniPerson = new Person('SoftUni')
    let stephanPerson = new Person('Stephan', "Johnson", 25)
    let gabrielPerson = new Person('Gabriel', "Peterson", 24, 'g.p@gmail.com')

    arrOfPersons.push(annaPerson, softUniPerson, stephanPerson, gabrielPerson)
    return arrOfPersons
}

for (const object of getPersons()) {
    console.log(object)
}

