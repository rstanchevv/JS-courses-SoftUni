function createPerson(firstName, lastName){
    let person = {
        firstName,
        lastName,
        get fullName(){
            return `${this.firstName} ${this.lastName}`;
        },
        set fullName(value){
            let [firstName, lastName] = value.split(' ');
            this.firstName = firstName;
            this.lastName = lastName;
        }
    }
    return person;
}
let person = createPerson('Ivan', 'Ivanov');
console.log(person);
console.log(person.fullName)
person.fullName = 'Dragan Cankov'
console.log(person);
console.log(person.fullName)
