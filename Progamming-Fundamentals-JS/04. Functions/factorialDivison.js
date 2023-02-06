function factorialDivision(num1,num2){
    let firstFactorial = findFactorial(num1);
    let secondFactorial = findFactorial(num2);
    return (firstFactorial / secondFactorial).toFixed(2);
    function findFactorial(a){
        let finalFactorial = a;
        for (let i = a - 1; i > 0; i--){
            finalFactorial *= i
        }
        return finalFactorial
    }
}
console.log(factorialDivision(6,2))