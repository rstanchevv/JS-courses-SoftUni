function searchForNumber(arr1,arr2){
    let elementsToTake = arr2[0];
    let elementsToRemove = arr2[1];
    let searhedElement = arr2[2];
    let newArr = [];
    for (let i =0; i < elementsToTake; i++){
        newArr.push(arr1.shift())
    }
    newArr.splice(0, elementsToRemove);
    newArr = newArr.filter(a => a === searhedElement);
    // let counter = 0;
    // for (let i =0; i < newArr.length; i++){
    //     if (newArr[i] === searhedElement){
    //         counter++
    //     }
    // }
    return `Number ${searhedElement} occurs ${newArr.length} times.`
}
console.log(searchForNumber([7, 1, 5, 8, 2, 7],

    [3, 1, 5] 
    ))