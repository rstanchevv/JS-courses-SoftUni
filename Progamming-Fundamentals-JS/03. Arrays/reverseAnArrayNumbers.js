function reverseAnArrayNumbers(n, array){
    let newArray = [];
    for (let i = 0; i < n; i++) {
        newArray.push(array[i]);
    }
    newArray.reverse();
    console.log(newArray.join(" "))
}
reverseAnArrayNumbers(2, [66, 43, 75, 89, 47])