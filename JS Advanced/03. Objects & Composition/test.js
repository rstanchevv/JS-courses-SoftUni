let testObj = {
    name: 'asd',
    age: 30,
    vision: {
        looking: 'good',
        number: 10,
        multiplyValue: 5,
        multiply(){
            return testObj.age * this.multiplyValue
        }
    }
}
console.log(JSON.stringify(testObj))