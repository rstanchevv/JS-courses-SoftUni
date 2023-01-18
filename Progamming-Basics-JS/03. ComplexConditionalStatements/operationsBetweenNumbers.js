function operationBetweenNumbers(input){
    let numberOne = Number(input[0]);
    let numberTwo = Number(input[1]);
    let operator = input[2];
    let evenOrOdd =""
    let result = ''

    switch (operator){
        case "+":
            result = (numberOne + numberTwo);
            if (result % 2 === 0){
                evenOrOdd = "even"
            } else {
                evenOrOdd = "odd"
            }
            console.log(`${numberOne} ${operator} ${numberTwo} = ${result} - ${evenOrOdd}`)
            break;
        case "-":
            result = (numberOne - numberTwo);
            if (result % 2 === 0){
                evenOrOdd = "even"
            } else {
                evenOrOdd = "odd"
            }
            console.log(`${numberOne} ${operator} ${numberTwo} = ${result} - ${evenOrOdd}`)
            break;
        case "*":
            result = (numberOne * numberTwo);
            if (result % 2 === 0){
                evenOrOdd = "even"
            } else {
                evenOrOdd = "odd"
            }
            console.log(`${numberOne} ${operator} ${numberTwo} = ${result} - ${evenOrOdd}`)
            break;
        }

    if (operator === "/" && numberTwo === 0){
        console.log(`Cannot divide ${numberOne} by zero`)
    } else if (operator ==="%" && numberTwo === 0){
        console.log(`Cannot divide ${numberOne} by zero`)
    } else if (operator === "/"){
    result = (numberOne / numberTwo).toFixed(2);
        console.log(`${numberOne} ${operator} ${numberTwo} = ${result}`)
    } else if (operator === "%"){
        result = (numberOne % numberTwo)
        console.log(`${numberOne} ${operator} ${numberTwo} = ${result}`)
    }
}
operationBetweenNumbers (["123", "12", "/"])