function magicMatrices(arr){
    let sumOfNumbersRows = 0;
    let sumOfNumbersColumns = 0;
    let equalCounter = 0;
    for (let i = 0; i < arr.length; i++){
        sumOfNumbersRows = 0;
        sumOfNumbersColumns = 0;
        for (let j = 0; j < arr.length; j++){
            sumOfNumbersRows += arr[i][j];
            sumOfNumbersColumns += arr[j][i]
        }
        if (sumOfNumbersColumns === sumOfNumbersRows){
            equalCounter++
        }
    }
    return equalCounter === arr.length ? "true" : "false";
}
console.log(magicMatrices([[1, 0, 0], [0, 0, 1], [0, 1, 0]]))
