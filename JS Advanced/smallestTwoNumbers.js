function smallestTwoNumbers(arr){
    let newArr = [];
    for (let i = 0; i < 2; i++){
        let indexOf = arr.indexOf(Math.min(...arr));
        newArr.push(arr.splice(indexOf,1)[0]);
    }
    console.log(newArr.join(" "))
}
smallestTwoNumbers([30, 15, 50, 5])