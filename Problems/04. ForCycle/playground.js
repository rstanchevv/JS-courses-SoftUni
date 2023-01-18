function NumbersEndingOn7(input) {
    let firstNumber = Number(input[0]);
    let secondNumber = Number(input[1]);
    let magicNumber = Number(input[2]);
    let counter = 0;
    let magicNumberTrue = false;

    for (let i = firstNumber; i <= secondNumber; i++) {
        for (let y = firstNumber; y <= secondNumber; y++) {
            counter++
            if (i + y === magicNumber) {
                magicNumberTrue = true;
                console.log(`Combination N:${counter} (${i} + ${y} = ${magicNumber})`)
                break;
            }
        }
        if (magicNumberTrue){
            break;
        }
    }
    if (magicNumberTrue === false){
        console.log(`${counter} combinations - neither equals ${magicNumber}`)
    }
}
NumbersEndingOn7(["88", 
"888", 
"2000"])
