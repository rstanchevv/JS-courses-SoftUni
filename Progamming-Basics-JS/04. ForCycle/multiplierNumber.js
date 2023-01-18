function multiplier(input){
    let number = Number(input[0]);
    let sum = 0;
    for (let i = 0; i <=10;i++){
        sum = i * number;
        console.log(`${i} * ${number} = ${sum}`)
    }
}
multiplier(["5"])