function test(){
    let obj = {
        name: 'test',
        age: 25
    }
    let printNameAge = printNameAndAge.bind(obj);
    console.log(printNameAge())
}
function printNameAndAge(){
    return `${this.name} = ${this.age}`
}
test();
