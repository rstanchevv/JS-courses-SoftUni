function negativePositiveNumbers(arr){
    let newArr = [];
    for (const number of arr) {
        if (number < 0){
            newArr.unshift(number);
        } else {
            newArr.push(number)
        }
    }
    console.log(newArr.join("\n"))
}
negativePositiveNumbers([3, -2, 0, -1])