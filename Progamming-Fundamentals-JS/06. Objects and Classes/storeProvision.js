function storeProvision(localStoreArr, orderedArr){
    let localStoreObj = {};
    for (let i = 0; i < localStoreArr.length; i+=2){
        let currentProduct = localStoreArr[i];
        let currentQuantity = Number(localStoreArr[i + 1]);
        localStoreObj[currentProduct] = currentQuantity;
    }
    for (let i =0; i < orderedArr.length; i+=2){
        let currentProduct = orderedArr[i];
        let currentQuantity = Number(orderedArr[i + 1]);
        if (localStoreObj.hasOwnProperty(currentProduct)){
            localStoreObj[currentProduct] += currentQuantity;
        } else{
            localStoreObj[currentProduct] = currentQuantity;
        }
    }
    for (const product in localStoreObj) {
        console.log(`${product} -> ${localStoreObj[product]}`);       
        }
}
storeProvision([
    'Chips', '5', 'CocaCola', '9', 'Bananas', '14', 'Pasta', '4', 'Beer', '2'
    ],
    [
    'Flour', '44', 'Oil', '12', 'Pasta', '7', 'Tomatoes', '70', 'Bananas', '30'
    ])
    