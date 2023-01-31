function sumOfEvenNumbers(array){
    let sum = 0;
    for (let index = 0; index < array.length; index++) {
        let currentNumber = parseInt(array[index]);
        if(currentNumber % 2 === 0){
            sum += currentNumber;
        }
    }
    console.log(sum)

}
sumOfEvenNumbers(['2','4','6','8','10'])