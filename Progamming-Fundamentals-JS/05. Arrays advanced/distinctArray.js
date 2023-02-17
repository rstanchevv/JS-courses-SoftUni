function distinctArray(arr){
    let newArr = arr.filter((a, i) => arr.indexOf(a) === i);
    return newArr.join(" ")
}
console.log(distinctArray([7, 8, 9, 7, 2, 3,

    4, 1, 2]))