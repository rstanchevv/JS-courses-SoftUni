function numberModification(n){
    let sumOfDigits = sumTheDiggits(n)
    let getAverage = getAverageOfDiggits(n)

    let result = sumOfDigits / getAverage;

    while (result < 5){
        let numberToString = n.toString();
        numberToString += "9";
        n = Number(numberToString);
        result = sumTheDiggits(n) / getAverageOfDiggits(n);
    }    
    return n;

    function sumTheDiggits(n){
        let numberToString = n.toString();
        let sum = 0;
        for (let i = 0; i < numberToString.length;i++){
            sum += Number(numberToString[i])
        }
        return sum;
    }
    function getAverageOfDiggits(n){
        let numberToString = n.toString();
        return numberToString.length;
    }
}
console.log(numberModification(502))
console.log(numberModification(5835))