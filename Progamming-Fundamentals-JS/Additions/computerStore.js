function computerStore(input){
    let index = 0;
    let sumParts = 0;
    let sumTaxes = 0;
    let item = input[index];
    index++
    while (item !== "special" && item !== "regular"){
        let itemPrice = Number(item);
        if (itemPrice < 0){
            console.log(`Invalid price!`);
            item = input[index]
            index++
            continue;
        }
        let tax = itemPrice * 0.20;
        sumParts += itemPrice;
        sumTaxes += tax;
        item = input[index];
        index++
    }
    let totalPrice = sumParts + sumTaxes;
    if (sumParts === 0){
        console.log(`Invalid order!`)
        return;
    }
    if (item === "special"){
        totalPrice = totalPrice * 0.90;
    }
    console.log(`Congratulations you've just bought a new computer!`);
    console.log(`Price without taxes: ${sumParts.toFixed(2)}$`);
    console.log(`Taxes: ${sumTaxes.toFixed(2)}$`);
    console.log(`-----------`);
    console.log(`Total price: ${totalPrice.toFixed(2)}$`)
}
computerStore(['regular']);
    