function equalSumsOddOrEven(input){
    let startNum = Number(input[0]);
    let endNum = Number(input[1]);
    let result = ''
    for (let currentNum = startNum; currentNum <= endNum; currentNum++){
        let oddSum = 0;
        let evenSum = 0;
        let currentNumStr = currentNum.toString();

        for (let index = 0; index < currentNumStr.length; index++){
            let currentDigit = Number(currentNumStr[index]);
            let position = index + 1;
            if (position % 2 === 0){
                evenSum += currentDigit;
            } else {
                oddSum += currentDigit;
            }
        }
        if (oddSum === evenSum){
            result += `${currentNumStr} `;
        }
    }
    console.log(result)
}
equalSumsOddOrEven((["100000",
"100050"])
)
