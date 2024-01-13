"use strict";
function solve(fruit, grams, pricePerKilogram) {
    const gramsToKilos = grams / 1000;
    const requiredMoney = gramsToKilos * pricePerKilogram;
    console.log(`I need ${requiredMoney.toFixed(2)}$ to buy ${gramsToKilos.toFixed(2)} kilograms ${fruit}`);
}
solve('orange', 2500, 1.80);
//# sourceMappingURL=index.js.map