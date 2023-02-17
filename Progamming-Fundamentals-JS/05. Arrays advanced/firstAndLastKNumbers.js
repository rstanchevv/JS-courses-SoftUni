function firstAndLastKNumbers(arr){
    let numberOfKElements = arr[0];
    arr.shift()
    let firstArr = arr.slice(0, numberOfKElements)
    let secondArr = arr.slice(-numberOfKElements);
    console.log(firstArr.join(" "))
    console.log(secondArr.join(" "));
}
firstAndLastKNumbers([3, 6, 7, 8, 9])