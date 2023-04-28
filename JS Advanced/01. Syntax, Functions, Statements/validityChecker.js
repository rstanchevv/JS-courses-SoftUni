function validityChecker(x1,y1,x2,y2){
    let firstValidation = Math.sqrt(Math.pow(0 - x1, 2) + Math.pow(0 - y1, 2));
    let secondValidation = Math.sqrt(Math.pow(x2 - 0, 2) + Math.pow(y2 - 0, 2));
    let thirdValidation = Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));

    Number.isInteger(firstValidation)  ? console.log(`{${x1}, ${y1}} to {0, 0} is valid`) : console.log(`{${x1}, ${y1}} to {0, 0} is invalid`)
    Number.isInteger(secondValidation)  ? console.log(`{${x2}, ${y2}} to {0, 0} is valid`) : console.log(`{${x2}, ${y2}} to {0, 0} is invalid`)
    Number.isInteger(thirdValidation)  ? console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is valid`) : console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is invalid`)
}
validityChecker(3, 0, 0, 4)