function repeatString(str, n){
    let finalString = ''
    for (let i = 0; i < n; i ++){
        finalString += str;
    }
    return finalString;
}
console.log(repeatString("abc", 2))