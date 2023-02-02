function magicNumbers(arr, number){
    let newArr = [];
    for (let i = 0; i < arr.length; i++){
        let sum = 0;
        for (let j = i + 1; j < arr.length; j++){
            sum = arr[i] + arr[j];
            if (sum === number){
                newArr.push(arr[i], arr[j])
                sum = 0;
            } else {
                sum = 0;
            }
        }
        sum = 0;
    }
   for (let i = 1; i <= newArr.length; i+=2){
        console.log(`${newArr[i-1]} ${newArr[i]}`)
    }
}
magicNumbers([14, 13, 13, 13, 7, 19, 8], 27)