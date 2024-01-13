function calculator(number:number, operator: '+' | '-' | '/' | '*', anotherNumber:number){
    const operatorLib: {[key:string]: number} ={
        '+': number + anotherNumber,
        '-': number - anotherNumber,
        '/': number / anotherNumber,
        '*': number * anotherNumber
    }

    console.log(operatorLib[operator].toFixed(2))
}

calculator(7, '*', 5)

