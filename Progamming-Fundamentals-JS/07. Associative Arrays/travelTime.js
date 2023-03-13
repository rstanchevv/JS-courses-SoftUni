function travelTime(input) {
    let obj = {};
    for (const el of input) {
        let tokens = el.split(" > ")
        let country = tokens[0];
        let town = tokens[1];
        let cost = Number(tokens[2]);
        if (!obj.hasOwnProperty(country)) {
            obj[country] = {};
        }
        if (!obj[country].hasOwnProperty(town)) {
            obj[country][town] = cost;
        } 
        let oldCost = obj[country][town];
        if (oldCost > cost){
            obj[country][town] = cost;
        }
    }
    let sortingMainObj = Object.keys(obj).sort((a, b) => a.localeCompare(b));
    for (const country of sortingMainObj) {
        let result = `${country} -> `;
        let sorting = Object.entries(obj[country]).sort(([keyA, valueA], [keyB, valueB]) => valueA - valueB);
        for (const [city, cost] of sorting) {
            result += `${city} -> `;
            result += `${cost} `
        }
        console.log(result.trim())
    }
}
    travelTime([
        'Bulgaria > Sofia > 25000',
        'Bulgaria > Sofia > 25000',
        'Kalimdor > Orgrimar > 25000',
        'Albania > Tirana > 25000',
        'Bulgaria > Varna > 25010',
        'Bulgaria > Lukovit > 10'
        ]        
    )