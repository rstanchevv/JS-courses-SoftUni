function reverseString(incomingText){
    let splitString = incomingText.split("");
    let reverseArray = splitString.reverse();
    let joinArray = reverseArray.join("");
    console.log(joinArray)
}
reverseString("54321")