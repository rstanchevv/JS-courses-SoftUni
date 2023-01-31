function equalArrays(arr, arr2){
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        arr[i] = Number(arr[i])
        sum += arr[i];
    }
    for (let i = 0; i < arr2.length; i++) {
        arr2[i] = Number(arr2[i]);
    }
    let areEqual = true;
    for (let i = 0; i <arr.length; i++){
        if (arr[i] !== arr2[i]){
            areEqual = false;
            console.log(`Arrays are not identical. Found difference at ${i} index`);
            break;
        }
    }
    if (areEqual){
        console.log(`Arrays are identical. Sum: ${sum}`)
    }
}
equalArrays(['10','20','30'], ['10','20','30'])