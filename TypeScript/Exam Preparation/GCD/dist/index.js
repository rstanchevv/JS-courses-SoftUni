"use strict";
function GCD(num1, num2) {
    let greatestCommonDivisor = 0;
    for (let i = 0; i <= num1; i++) {
        if (num1 % i == 0 && num2 % i == 0) {
            greatestCommonDivisor = i;
        }
    }
    console.log(greatestCommonDivisor);
}
GCD(15, 5);
//# sourceMappingURL=index.js.map