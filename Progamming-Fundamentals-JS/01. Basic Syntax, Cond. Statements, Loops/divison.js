function division(number) {
    let divisibleBy = 0;
    let notDivisible = false;
    if (number % 10 === 0) {
        divisibleBy = 10;
    } else if (number % 7 ===0){
        divisibleBy = 7;
    } else if (number % 6 === 0) {
        divisibleBy = 6;
    } else if (number % 3 === 0) {
        if (number % 2 === 0) {
            divisibleBy = 6;
        }
        divisibleBy = 3;
    }
    else if (number % 2 === 0) {
        divisibleBy = 2;
        if (number % 3 === 0) {
            divisibleBy = 6;
        }
        if (number % 10 === 0) {
            divisibleBy = 10;
        }
    }
    else {
        notDivisible = true;
    }
    if (notDivisible === true) {
        console.log(`Not divisible`);
    }
    else {
        console.log(`The number is divisible by ${divisibleBy}`)
    }
}
division(30)
division(15)
division(12)
division(1643)