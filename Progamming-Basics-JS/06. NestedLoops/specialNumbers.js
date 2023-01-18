function specialNumbers(input){
    let n = Number(input[0]);
    let result = '';
    
    for (let currentNum = 1111; currentNum <= 9999; currentNum++){
        let isSpecial = true;
        let currentNumStr = currentNum.toString();
        for(let index = 0; index < currentNumStr.length; index++){
            let currentDigit = Number(currentNumStr[index]);

            if (n % currentDigit != 0){
                isSpecial = false;
                break;
            }
        }
        if (isSpecial == true){
        result += `${currentNumStr} `;
        }
    }
    console.log(result)
}
specialNumbers(["3"])