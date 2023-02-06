function addAndSubtract(a,b,c){
    let sum = add(a,b);
    let subtractTwoNumber = subtract(sum, c)
    return subtractTwoNumber;

    function add(a,b){
        return a + b;
    }
    function subtract(a,b){
        return a - b;
    }
}
console.log(addAndSubtract(23,

    6,
    
    10))