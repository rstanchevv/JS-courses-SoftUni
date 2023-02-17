function processOddNumbers(arr){
    let newArr = arr.filter((x,i) => i % 2 != 0);
    let newArr2 = newArr.reverse((a,b) => b - a).map(x => x * 2)
    return newArr2.join(" ")
}
processOddNumbers([10, 15, 20, 25])