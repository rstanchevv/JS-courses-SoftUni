"use strict";
function printAndSum(startNumber, endNumber) {
    let sum = 0;
    let numbersArr = [];
    for (let i = startNumber; i <= endNumber; i++) {
        numbersArr.push(i);
        sum += i;
    }
    console.log(numbersArr.join(' '));
    console.log(`Sum: ${sum}`);
}
printAndSum(50, 60);
//# sourceMappingURL=index.js.map