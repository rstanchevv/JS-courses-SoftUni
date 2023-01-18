function dividibleto9(input){
    let numberOne = Number(input[0]);
    let numberTwo = Number(input[1]);
    let sum = 0


    for (let i = numberOne;i <= numberTwo;i++){
        if (i % 9 === 0){
            sum = sum + i
                }
    }
    console.log(`The sum: ${sum}`)
    for (let i = numberOne;i <= numberTwo;i++){
        if (i % 9 === 0){
            console.log(i)
        }
    }
}
dividibleto9(["100", "200"])