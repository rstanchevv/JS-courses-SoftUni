function smallestTwoNumbers(arr){
    let newArr = arr.sort((a, b) => a - b);
    let finalArr = newArr.splice(0,2)
    return finalArr.join(" ")
}
console.log(smallestTwoNumbers([3, 0, 10, 4, 7, 3]))