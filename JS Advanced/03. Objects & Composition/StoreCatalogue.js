function storeCatalogue(arr){
    let obj = {}
    for (const row of arr) {
        let [product, price] = row.split(" : ");
        obj[product] = Number(price);
    }
    let sortedObj = Object.keys(obj).sort((a,b) => a.localeCompare(b));
    let currentLetter = sortedObj[0][0];
    console.log(currentLetter);
    for (const product of sortedObj) {
        if (currentLetter !== product[0]){
            currentLetter = product[0];
            console.log(currentLetter);
        }
        console.log(`  ${product}: ${obj[product]}`)
    }
}
storeCatalogue(['Banana : 2',
'Rubics Cube : 5',
'Raspberry P : 4999',
'Rolex : 100000',
'Rollon : 10',
'Rali Car : 2000000',
'Pesho : 0.000001',
'Barrel : 10']

)