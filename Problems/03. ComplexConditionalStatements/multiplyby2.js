function multiplyby2(input){
    let multiplier = 0;
    for (let i = 0; i < input.length; i++){
        if (input[i] < 0){
            console.log(`Negative number!`);
            return;
        }
        let multipliedNumber = Number(input[i]) * 2;
        console.log(`Result: ${multipliedNumber.toFixed(2)}`)   
    }
}
multiplyby2(["12","43.2144","12.3","543.23","-20"])