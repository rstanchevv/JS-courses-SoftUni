function solution(firstNumber){
    let b = (secondNumber) => {
        return firstNumber + secondNumber;
    }
    return b;
}
let add5 = solution(5);

console.log(add5(2));

console.log(add5(3))