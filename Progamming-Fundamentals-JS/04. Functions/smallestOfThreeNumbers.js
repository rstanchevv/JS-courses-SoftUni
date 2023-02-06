function smallestOfThreeNumbers(num1, num2, num3){
    let min =  Number.MIN_SAFE_INTEGER;
    if (num1 > min){
        min = num1;
    }
    if (num2 < min){
        min = num2;
    }
    if (num3 < min){
        min = num3;
    }
    return min;
}
console.log(smallestOfThreeNumbers(600,

    342,
    
    123))