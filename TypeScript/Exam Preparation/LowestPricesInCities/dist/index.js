"use strict";
function solve(arr) {
    const objOfProducts = {};
    for (const entry of arr) {
        const splitElement = entry.split("|");
        let city = splitElement[0];
        let product = splitElement[1];
        let price = Number(splitElement[2]);
        if (objOfProducts.hasOwnProperty(product)) {
            if (price < objOfProducts[product].price) {
                objOfProducts[product].price = price;
                continue;
            }
        }
        else {
            objOfProducts[product] = {
                city,
                price,
            };
        }
    }
    for (const product of Object.keys(objOfProducts)) {
        console.log(`${product} -> ${objOfProducts[product].price} (${objOfProducts[product].city})`);
    }
}
solve([
    "Sample Town | Sample Product | 1000",
    "Sample Town | Orange | 2",
    "Sample Town | Peach | 1",
    "Sofia | Orange | 3",
    "Sofia | Peach | 2",
    "New York | Sample Product | 1000.1",
    "New York | Burger | 10",
]);
//# sourceMappingURL=index.js.map