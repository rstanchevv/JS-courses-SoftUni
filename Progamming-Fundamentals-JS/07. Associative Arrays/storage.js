function storage(input){
    let map = new Map();
    for (const el of input) {
        let tokens = el.split(" ");
        let product = tokens[0];
        let amount = Number(tokens[1]);
        if (!map.has(product)){
            map.set(product,amount)
        } else {
            amount += map.get(product);
            map.set(product, amount)
        }
    }
    for (const [product, amount] of map) {
        console.log(`${product} -> ${amount}`)
    }
}
storage(['apple 50',

'apple 61',

'coffee 115',

'coffee 40'])