function carsRegister(arr){
    let obj = {};
    arr.forEach(line => {
        let [brand, model, producedCars] = line.split(' | ');
        if (!obj.hasOwnProperty(brand)){
            obj[brand] = {}
        }
        if (obj[brand].hasOwnProperty(model)){
            obj[brand][model] += Number(producedCars)
        } else {
            obj[brand][model] = Number(producedCars);
        }
    })
    let entries = Object.entries(obj);
    for (const [brand, innerInfo] of entries) {
        console.log(`${brand}`);
        for (const [car, producedCars] of Object.entries(innerInfo)) {
            console.log(`###${car} -> ${producedCars}`)
        }
    }
}
carsRegister(['Audi | Q7 | 1000',
'Audi | Q6 | 100',
'BMW | X5 | 1000',
'BMW | X6 | 100',
'Citroen | C4 | 123',
'Volga | GAZ-24 | 1000000',
'Lada | Niva | 1000000',
'Lada | Jigula | 1000000',
'Citroen | C4 | 22',
'Citroen | C5 | 10'])