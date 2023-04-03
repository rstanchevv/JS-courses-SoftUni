function plantDiscovery2(arr){
    let numberOfPlants = Number(arr.shift());
    let obj = {};
    for (let i = 0; i < numberOfPlants; i++){
        let [plant, rarity] = arr[0].split("<->");
        if (!obj.hasOwnProperty(plant)){
            obj[plant] = {
                rarity,
                rating: [],
            }
        } else {
            obj[plant].rarity += Number(rarity)
        }
        arr.shift();
    }
    let commands = arr.slice();
    let command = commands.shift();
    while (command !== "Exhibition"){
        let [currentCommand, values] = command.split(": ");
        switch (currentCommand){
            case "Rate":
                let [plant, rating] = values.split(" - ");
                if (obj.hasOwnProperty(plant)){
                    obj[plant].rating.push(Number(rating));
                } else {
                    console.log(`error`)
                }
                break;
            case "Update":
                let [updatedPlant, newRarity] = values.split(" - ");
                if (obj.hasOwnProperty(updatedPlant)){
                    obj[updatedPlant].rarity = newRarity;
                } else {
                    console.log(`error`)
                }
                break;
            case "Reset":
                if (obj.hasOwnProperty(values)){
                    obj[values].rating = [];
                } else {
                    console.log(`error`);
                }
                break;
        } 
        command = commands.shift();
    }
    let keys = Object.keys(obj);
    console.log(`Plants for the exhibition:`)
    for (const plant of keys) {
        console.log(`- ${plant}; Rarity: ${obj[plant].rarity}; Rating: ${average(obj[plant].rating).toFixed(2)}`)
    }
    function average(arr){
        if (arr.length === 0){
            return 0;
        } else {
            return arr.reduce((a,b) => a + b,0) / arr.length;
        }
    }
}
plantDiscovery2(["2",
"Candelabra<->10",
"Oahu<->10",
"Rate: Oahu - 7",
"Rate: Candelabra - 6",
"Exhibition"])

