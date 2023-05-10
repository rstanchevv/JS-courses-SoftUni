function lastKNumbersSequence(k,n){
    let newArr = [1];
    while (newArr.length !== k){
        let lastElement = newArr[newArr.length - 1];
        let indexOfLastElement = newArr.lastIndexOf(lastElement);
        let numberOfKElements = n - 1;
        let counter = 0;
        let i = 1;
        let sum = newArr[indexOfLastElement];
        while (counter !== numberOfKElements){
            if (indexOfLastElement - i < 0){
                break;
            }
            sum += newArr[indexOfLastElement - i];
            i++;
            counter++
        }
        newArr.push(sum);
    }
    return newArr;
}
lastKNumbersSequence(8, 2)