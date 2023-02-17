function sumOfFirstAndLast(arr){
    let firstElement = Number(arr.shift());
    let lastElement = Number(arr.pop());
    return firstElement + lastElement;
}
console.log(sumOfFirstAndLast(['20', '30', '40']))