function palindromeIntegers(arr){
    let isPalindrome = false;
    for (let i = 0; i < arr.length; i++){
        let numberToString = arr[i].toString();
        let backward = '';
        for (let j = numberToString.length - 1; j >= 0; j--){
            backward += numberToString[j];
        }
        console.log(backward === numberToString ? "true" : "false")
    }
}
palindromeIntegers([123,323,421,121])

