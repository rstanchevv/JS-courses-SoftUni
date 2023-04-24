function fruit(fruit, weight, price){
    let weightToKilos = (weight / 1000);
    let finalPrice = (weightToKilos * price);
    console.log(`I need $${finalPrice.toFixed(2)} to buy ${weightToKilos.toFixed(2)} kilograms ${fruit}.`)
}
fruit('apple', 1563, 2.35)