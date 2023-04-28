function diagonalSums(arr){
    let finalArr = [];
    let sumPrimaryDiagonal = 0;
    let sumSecondaryDiagonal = 0;
    let firstIndex = 0;
    let secondIndex = arr[0].length;
    for (const newArr of arr) {
        sumPrimaryDiagonal += newArr[firstIndex];
        sumSecondaryDiagonal += newArr[secondIndex -1];
        firstIndex++
        secondIndex--;
    }
    finalArr.push(sumPrimaryDiagonal, sumSecondaryDiagonal);
    return finalArr.join(" ")
}
console.log(diagonalSums([[3, 5, 17],
    [-1, 7, 14],
    [1, -8, 89]]
   ))