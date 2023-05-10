function townPopulation(arr){
    let obj = {}
    for (const el of arr) {
        let [town, population] = el.split(" <-> ")
        if (!obj.hasOwnProperty(town)){
        obj[town] = Number(population);
        }
        else {
            obj[town] += Number(population);
        }
    }
    for (const [town, population] of Object.entries(obj)) {
        console.log(`${town} : ${population}`)
    }
}
townPopulation(['Sofia <-> 1200000',

'Montana <-> 20000',

'New York <-> 10000000',

'Washington <-> 2345000',

'Las Vegas <-> 1000000'])