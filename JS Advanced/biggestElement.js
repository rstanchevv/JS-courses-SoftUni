function biggestElement(arr){
    let max = Number.MIN_SAFE_INTEGER;
    for (const array of arr ) {
        for (const number of array) {
            if (number > max){
                max = number;
            }
        }
    }
    console.log(max);
}
biggestElement([[3, 5, 7, 12], [-1, 4, 33, 2], [8, 3, 0, 4]])