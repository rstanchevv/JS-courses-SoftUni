function orders(type, amount){
    let price = 0;
    switch(type){
        case "water":
            price = 1;
            break
        case "coffee":
            price = 1.5;
            break
        case "coke":
            price = 1.4;
            break;
        case "snacks":
            price = 2;
            break;
    }
    console.log(`${(price * amount).toFixed(2)}`)
}
orders("coffee", 2)