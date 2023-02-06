function signCheck(numOne,numTwo,numThree){
    let negativeCounter = 0;
    let numOneToString = numOne.toString();
    let numTwoToString = numTwo.toString();
    let numThreeToString = numThree.toString();
    if (numOneToString.includes("-")){
        negativeCounter++;
    }
    if (numTwoToString.includes("-")){
         negativeCounter++;
    }
    if (numThreeToString.includes("-")){
        negativeCounter++;
    }
    return negativeCounter === 2 ? "Positive" : "Negative";
}
console.log(signCheck( -6,
    -12,
     14
   ))