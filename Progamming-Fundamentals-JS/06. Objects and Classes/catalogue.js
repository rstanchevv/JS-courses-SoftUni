function catalogue(arr) {
    let myObj = {};
    for (let line of arr) {
        let [product, value] = line.split(" : ");
        myObj[product] = Number(value);
    }
    let sortedArr = Object.keys(myObj).sort((a, b) => a.localeCompare(b));
    let groupChar = '';
    for (let key of sortedArr) {
        let name = key;
        if (groupChar !== name[0]) {
            groupChar = name[0];
            console.log(groupChar);
        }
        let price = myObj[key];
        console.log(`  ${name}: ${price}`)
    }
}
catalogue([

    'Appricot : 20.4',

    'Fridge : 1500',

    'TV : 1499',

    'Deodorant : 10',

    'Boiler : 300',

    'Apple : 1.25',

    'Anti-Bug Spray : 15',

    'T-Shirt : 10'

])