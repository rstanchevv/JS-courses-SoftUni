function sumOfNumbers(input){
    let number = input[0];
    let numberAsString = number + "";
    let sum = 0;
    for (let i = 0;i < (numberAsString.length); i++){
        sum = sum + Number(numberAsString[i]);
    }
    console.log(`The sum of the digits is:${sum}`)
}
sumOfNumbers(["564891"])