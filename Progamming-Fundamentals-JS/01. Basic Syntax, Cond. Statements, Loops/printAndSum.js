function printAndSum(number1, number2){
    let sum = 0;
    let s = ``;
    
    for (let i = number1; i <= number2; i++){
        s += i + " ";
        sum += i;
    }
    console.log(s)
    console.log(`Sum: ${sum}`)
}
printAndSum(5,10)