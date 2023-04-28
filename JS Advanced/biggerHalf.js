function biggerHalf(arr){
    let sortedArr = arr.sort((a,b) => a - b)
    let numberOfElements = Math.ceil(arr.length / 2);
    while (sortedArr.length > numberOfElements){
        sortedArr.shift();
    }
    return sortedArr;
}
console.log(biggerHalf([4, 7, 2, 5]))