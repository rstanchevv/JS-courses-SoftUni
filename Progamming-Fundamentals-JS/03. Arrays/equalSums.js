function equalSums(arr){
    let currentSum = arr[0];
    let rightSum = 0;
    if (arr.length === 1){
        return `0`;
    }
    for (let i = 1; i < arr.length; i++){
        rightSum = 0;
        for (let j = i + 1; j < arr.length; j++){
            rightSum += arr[j];
            if (currentSum === rightSum){
                return `${i}`
            } else if (rightSum > currentSum){
                break;
            }
        }
        currentSum += arr[i];
    }
    if (currentSum != rightSum){
        return `no`
    }
}
console.log(equalSums([1]))