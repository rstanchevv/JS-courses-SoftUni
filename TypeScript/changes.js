function solve(arr){
    const arrOfNumbers = arr.map(k => Number(k))
    let [K, L, M, N] = arrOfNumbers;

    let firstCounter = 8;
    let secoundCounter = 9;
    let thirdCounter = 8;
    let fourthCounter = 9;
    let validChangesCounter = 0;
    let firstNumber
    let secondNumber

    while(validChangesCounter < 6){
        while (firstNumber == null){
            for (let i = K; i <= firstCounter; i++){
                if (i % 2 == 0){
                    firstDiggit = i;
                    break;
                }
            }
            for (let i = secoundCounter; i >= L; i--){
                if (i % 2 > 0){
                    secondDiggit = i;
                    break;
                }
            }
            firstNumber = Number(`${firstDiggit}${secondDiggit}`)
        }

        while (firstNumber !== null){
            for (let i = M; i <= thirdCounter; i++){
                if (i % 2 == 0){
                    fourthCounter = 9
                    thirdDiggit = i;
                    for (let i = fourthCounter; i >= N; i--){
                        if (i % 2 > 0){
                            fourthDiggit = i;
                            secondNumber = Number(`${thirdDiggit}${fourthDiggit}`);
                            if (firstNumber == secondNumber){
                                console.log(`Cannot change the same player.`)
                                validChangesCounter++
                                fourthCounter-=2
                            } else {
                                console.log(`${firstNumber} - ${secondNumber}`)
                                validChangesCounter++
                                fourthCounter-=2
                            }
                        }
                }
            }
            
        }
        secoundCounter-=2
        firstNumber = null;
    }
}
}
solve((["7",
"6",
"8",
"5"]))