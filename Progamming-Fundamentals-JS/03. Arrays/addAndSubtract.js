function addAndSubtract(arr){
    let oldSum = 0;
    let newSum = 0;
    let newArray = [];
    for (let i = 0; i < arr.length; i++) {
        let element = arr[i];
        oldSum += element;
        if (element % 2 ===0){
            element += i;
            newArray.push(element);
            newSum += element;
        } else {
            element -= i;
            newArray.push(element);
            newSum += element;
        }
    }
    console.log(newArray)
    console.log(oldSum);
    console.log(newSum)
}
addAndSubtract([5, 15, 23, 56, 35])