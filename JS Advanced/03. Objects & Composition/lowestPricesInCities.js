function lowestPricesInCities(arr){
    let obj = {};
    for (const element of arr) {
        let [town, product, price] = element.split(" | ");
        if (!obj.hasOwnProperty(product)){
            obj[product] = {
                town,
                price: Number(price)
            }
        } else {
            if (Number(price) < obj[product].price){
                obj[product].price = Number(price);
                obj[product].town = town;
            } 
        }
    }
    for (let product in obj){
        console.log(`${product} -> ${obj[product].price} (${obj[product].town})`)
    }
}
lowestPricesInCities(['Sofia City | Audi | 100000',
'Sofia City | BMW | 100000',
'Sofia City | Mitsubishi | 10000',
'Sofia City | Mercedes | 10000',
'Sofia City | NoOffenseToCarLovers | 0',
'Mexico City | Audi | 1000',
'Mexico City | BMW | 99999',
'Mexico City | Mitsubishi | 10000',
'New York City | Mitsubishi | 1000',
'Washington City | Mercedes | 1000]'])