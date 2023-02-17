function negativeOrPositiveNumbers(arr){
    let newArr = []
    for (let i = 0; i <arr.length; i++ ){
        let element =  arr[i];
        if (element < 0){
            newArr.unshift(element);
        } else {
            newArr.push(element);
        }
    }
    return newArr.join("\n")
}
console.log(negativeOrPositiveNumbers(['7', '-2', '8', '9']))