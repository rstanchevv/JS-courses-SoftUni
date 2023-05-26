function sortArray(arr, criteria){
    let newArr = arr.sort((a,b) => {
        if (criteria === 'asc'){
            return a -b;
        } else if (criteria === 'desc'){
            return b - a;
        }
    })
    return newArr;
}
console.log(sortArray([14, 7, 17, 6, 8], 'dsc'))