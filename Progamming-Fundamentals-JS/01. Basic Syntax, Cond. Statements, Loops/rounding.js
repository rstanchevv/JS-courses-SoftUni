function rounding(number1, number2){
    if (number2 > 15){
        number2 = 15;
    }
    console.log(`${parseFloat(number1.toFixed(number2))}`)
}
rounding (3.141592653589793238462643383279, 2)