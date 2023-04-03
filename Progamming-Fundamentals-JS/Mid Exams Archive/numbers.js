function numbers(string){
    let newArr = string.split(" ").map(Number);
    let finalArr = [];
    let average = findAverage(newArr);
    for (let i =newArr.length - 1; i >= 0; i --){
        if(newArr[i] > average){
            finalArr.push(newArr[i]);
        }
    }
    if (finalArr.length === 0){
        return "No";
    }
    finalArr.sort((a,b) => b-a)
    if (finalArr.length > 5){
        finalArr.splice(finalArr.length - (finalArr.length - 5));
    }
    return finalArr.join(" ")
    function findAverage(arr){
        let sum = 0;
        for (let i =0; i < arr.length; i++){
            sum += arr[i];
        }
        return sum / arr.length;
    }
}
console.log(numbers('3 5 8'))