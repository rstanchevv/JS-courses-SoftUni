function oddAndEvenSum(num) {
    let sumOfEvenNumbers = takeAndSumEvenNumbers(num);
    let sumOfOddNumbers = takeAndSumOddNumbers(num);

    return `Odd sum = ${sumOfOddNumbers}, Even sum = ${sumOfEvenNumbers}`;
    

    function takeAndSumEvenNumbers(a) {
        let numberToString = a.toString()
        let allEvenNumbers = ''
        let sum = 0;
        for (let i = 0; i < numberToString.length; i++) {
            if (Number(numberToString[i]) % 2 === 0) {
                allEvenNumbers += numberToString[i]
                sum += Number(numberToString[i])
            }
        }
        return sum;
    }
    function takeAndSumOddNumbers(a) {
        let numberToString = a.toString();
        let allOddNumbers = '';
        let sum = 0;
        for (let i = 0; i<numberToString.length; i++){
            if (Number(numberToString[i]) % 2 !== 0){
                allOddNumbers += numberToString[i];
                sum += Number(numberToString[i]);
            }
        }
        return sum;
    }
}
console.log(oddAndEvenSum(3495892137259234))