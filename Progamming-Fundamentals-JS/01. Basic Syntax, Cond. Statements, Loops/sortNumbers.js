function sortNumbers(number1, number2, number3){
    let arrayNumbers = [number1, number2, number3];
    arrayNumbers.sort((a,b) => (b-a));
    console.log(arrayNumbers.join(`\n`))
}
sortNumbers(3,1,2)