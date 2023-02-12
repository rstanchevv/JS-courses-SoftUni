function maxNumbers(arr) {
    let newArr = [];
    let currentNumber = 0;
    let nextNumber = 0;
    let maxNumber = Number.MIN_SAFE_INTEGER;
    for (let i = 0; i < arr.length; i++) {
        currentNumber = arr[i];
        for (let j = i + 1; j <= arr.length; j++) {
            nextNumber = arr[j];
            if (nextNumber > maxNumber) {
                maxNumber = nextNumber;
            }
        }
        if (currentNumber > maxNumber){
            newArr.push(currentNumber);
        }
        maxNumber = 0;
    }
    console.log(newArr.join(" "))
}
(maxNumbers([14, 24, 3, 19, 15, 17]))