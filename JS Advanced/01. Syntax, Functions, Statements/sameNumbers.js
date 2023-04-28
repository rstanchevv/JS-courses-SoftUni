function sameNumbers(number){
    let isSameNumber = true; 
    let numberToString = number.toString();
    let firstDiggit = numberToString[0];
    let sum = Number(firstDiggit);
    for (let i = 1; i < numberToString.length; i++){
        if (numberToString[i] !== firstDiggit){
            isSameNumber = false;
        }
        sum += Number(numberToString[i])
    }
    console.log(isSameNumber)
    console.log(sum)
}
sameNumbers(1234)