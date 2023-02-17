function listOfProducts(arr){
    let newArr = arr.sort();
    for (let i = 1; i <= newArr.length; i++){
        console.log(`${i}.${newArr[i - 1]}`)
    }
}
listOfProducts(['Watermelon', 'Banana', 'Apples'])