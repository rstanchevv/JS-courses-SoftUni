function pirates(arr) {
    let cityCommand = arr.shift();
    let obj = {}
    while (cityCommand !== "Sail") {
        let [city, population, gold] = cityCommand.split("||");
        if (!obj.hasOwnProperty(city)){
            obj[city] = {
                population: Number(population),
                gold: Number(gold),
            }
        } else {
            obj[city].population += Number(population);
            obj[city].gold += Number(gold);
        }
        cityCommand = arr.shift();
    }
    let line = arr.shift();
    while (line !== "End") {
        let [command, town, valueTwo, valueThree] = line.split("=>");
        switch (command) {
            case "Plunder":
                obj[town].population -= Number(valueTwo);
                obj[town].gold -= Number(valueThree);
                console.log(`${town} plundered! ${valueThree} gold stolen, ${valueTwo} citizens killed.`)
                if (obj[town].population === 0 || obj[town].gold === 0) {
                    delete obj[town];
                    console.log(`${town} has been wiped off the map!`)
                }
                break;
            case "Prosper":
                if (valueTwo >= 0) {
                    obj[town].gold += Number(valueTwo);
                    console.log(`${valueTwo} gold added to the city treasury. ${town} now has ${obj[town].gold} gold.`)
                } else {
                    console.log(`Gold added cannot be a negative number!`);
                }
                break;
        }
        line = arr.shift()
    }
    let keys = Object.keys(obj);
    if (keys.length > 0){
        console.log(`Ahoy, Captain! There are ${keys.length} wealthy settlements to go to:`)
        for (const city of keys) {
        console.log(`${city} -> Population: ${obj[city].population} citizens, Gold: ${obj[city].gold} kg`)
        }
    } else {
        console.log(`Ahoy, Captain! All targets have been plundered and destroyed!`)
    }
}
pirates(["Nassau||95000||1000",
"San Juan||930000||1250",
"Campeche||270000||690",
"Port Royal||320000||1000",
"Port Royal||100000||2000",
"Sail",
"Prosper=>Port Royal=>-200",
"Plunder=>Nassau=>94000=>750",
"Plunder=>Nassau=>1000=>150",
"Plunder=>Campeche=>150000=>690",
"End"])

