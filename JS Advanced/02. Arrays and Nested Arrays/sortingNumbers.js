function sortingNumbers(arr){
    let newArr = [];
    while (arr.length > 0){
        let indexOfMin = arr.indexOf(Math.min(...arr));
        let indexOfMax = arr.indexOf(Math.max(...arr));
        newArr.push(Math.min(...arr));
        newArr.push(Math.max(...arr));
        arr.splice(indexOfMin, 1)
        arr.splice(indexOfMax, 1)
    }
    console.log(newArr)







}
sortingNumbers([1, 65, 3, 52, 48, 63, 31, -3, 18, 56])