function plantDiscovery(arr) {
    let number = Number(arr[0]);
    let obj = {};
    for (let i = 1; i <= number; i++) {
        let [plant, rarity] = arr[i].split("<->");
        if (!obj.hasOwnProperty(plant)){
            obj[plant] = {
                rarity: rarity,
                rate: []
            }
        } else{
            obj[plant][`rarity`] = Number(rarity)
        }
    }
    let commands = arr.slice(number + 1);
    let command = commands.shift();
    while (command !== "Exhibition") {
        let commandSplit = command.split(": ");
        switch (commandSplit[0]) {
            case "Rate":
                let [plant, rating] = commandSplit[1].split(" - ");
                if (!obj.hasOwnProperty(plant)) {
                    console.log(`error`);
                    break;
                }
                obj[plant][`rate`].push(Number(rating));
                break;
            case "Update":
                let [updatePlant, newRarity] = commandSplit[1].split(" - ");
                if (!obj.hasOwnProperty(updatePlant)) {
                    console.log(`error`);
                    break;
                }
                obj[updatePlant][`rarity`] = Number(newRarity);
                break;
            case "Reset":
                let resetPlant = commandSplit[1];
                if (!obj.hasOwnProperty(resetPlant)) {
                    console.log(`error`);
                    break;
                }
                while (obj[resetPlant][`rate`].length > 0){
                    obj[resetPlant][`rate`].shift()
                }
                break;
        }
        command = commands.shift();
    }
    let sortedPlants = Object.keys(obj).sort((a,b) => a.localeCompare(b))

    console.log(`Plants for the exhibition:`)
    for (const plant of sortedPlants) {
        console.log(`- ${plant}; Rarity: ${obj[plant][`rarity`]}; Rating: ${average(obj[plant][`rate`]).toFixed(2)}`)
    }
    function average(arr){
        if (arr.length === 0){
            return 0;
        }
        return arr.reduce((a,b) => a + b, 0) / arr.length;
    }
}
    plantDiscovery(["3",
    "Arnoldii<->4",
    "Woodii<->7",
    "Welwitschia<->2",
    "Rate: Woodii - 10",
    "Rate: Welwitschia - 7",
    "Rate: Arnoldii - 3",
    "Rate: Woodii - 5",
    "Update: Woodii - 5",
    "Reset: Arnoldii",
    "Exhibition"])
    