function barcodeGenerator(input){
    let firstNumber = Number(input[0]);
    let secondNumber = Number(input[1]);
    for (let i = firstNumber; i <= secondNumber; i++){
        for (let n = i[1]; n = i.length; n++){
            console.log(n)
        }
    }
}
barcodeGenerator(["2345",
"6789"])