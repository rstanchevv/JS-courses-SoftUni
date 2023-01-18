function sumOfOddNumbers(num){
    let oddCounter =0;
    let sumOfNumbers = 0;
    for (let i = 1; i <= Number.MAX_SAFE_INTEGER; i++){
        if (i % 2 > 0){
            console.log(i);
            sumOfNumbers += i;
            oddCounter++;
            if (oddCounter === num){
                break;
            }
        }
    }
    console.log(`Sum: ${sumOfNumbers}`)
}
sumOfOddNumbers(2050)