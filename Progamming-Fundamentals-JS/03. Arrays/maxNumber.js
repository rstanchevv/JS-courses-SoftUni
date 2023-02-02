function maxNumber(arr){
    let newArr = [];
    for (let index = 0; index < arr.length; index++){
        const element = arr[index];
        if (index === arr.length - 1){
            newArr.push(element);
            if (element === Math.max(...newArr)){
                newArr.splice(0, newArr.length, element)
            }
            break;
        }
        const nextElement = arr[index + 1];
        if (element > nextElement){
            newArr.push(element)
        }
    }
    console.log(newArr.join(" "))
}
maxNumber([41, 41, 34, 20])