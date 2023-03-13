function sortArray2Criteria(arr){
    arr.sort((a,b) => {
        if (a.length - b.length === 0){
            return a.localeCompare(b);
        }
        return a.length - b.length;
    })
    return arr.join("\n")
}
console.log(sortArray2Criteria(['Deny',

'omen',

'test', 'Default']))