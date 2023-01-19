function integerOrFloat(firstNumber, secondNumber, ThirdNumber){
    let sum = firstNumber + secondNumber + ThirdNumber;
    if (sum % 1 === 0){
        console.log(`${sum} - Integer`);
    } else{
        console.log(`${sum} - Float`)
    }
}
integerOrFloat(100, 200, 303)