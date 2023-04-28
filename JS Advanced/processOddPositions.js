function processOddPositions(arr){
    let newArr = [];
    for (let i = 0; i < arr.length; i++){
        if (i % 2 !== 0){
            newArr.push(arr[i] * 2);
        }
    }
    return newArr.reverse().join(" ");
}
console.log(processOddPositions([3, 0, 10, 4, 7, 3]))