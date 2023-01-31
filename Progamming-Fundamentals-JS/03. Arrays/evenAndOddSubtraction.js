function evenAndOddSubstraction(arr){
    let sumOfOddNumbers = 0;
    let sumOfEvenNumbers = 0;
    for (let index = 0; index < arr.length; index++) {
        let currentNumber = Number(arr[index]);
        if (currentNumber % 2 === 0){
            sumOfEvenNumbers += currentNumber;
        } else {
            sumOfOddNumbers += currentNumber;
        }
    }
    console.log(sumOfEvenNumbers - sumOfOddNumbers);


}
evenAndOddSubstraction([2,4,6,8,10])