function lastKNumberSequence(n, k){
    let newArr = Array(n).fill(0);
    newArr[0] = 1;
    for (let i = 1; i < n; i++){
        let sumOfLastTwoElements = 0;
        for (let j = i - 1; j > -k; j--){
            if (j < 0){
                continue;
            }
            sumOfLastTwoElements += newArr[j];
        }
        k--
        newArr[i] = sumOfLastTwoElements
    }
    return newArr.join(" ")
}
console.log(lastKNumberSequence(8,2))