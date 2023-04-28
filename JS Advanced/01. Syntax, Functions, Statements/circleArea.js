function circleArea(input){
    let typeOf = typeof input;
    typeOf === "number" ? console.log((Math.pow(input,2) * Math.PI).toFixed(2)) : console.log(`We can not calculate the circle area, because we receive a ${typeOf}.`)
}
circleArea(`5`)