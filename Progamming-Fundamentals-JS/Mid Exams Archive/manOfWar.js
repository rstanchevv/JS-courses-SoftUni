function manOWar(arr) {
    let pirateShipArr = arr[0].split(">").map(Number);
    let warshipArr = arr[1].split(">").map(Number);
    let maximumHealthCap = Number(arr[2]);
    let index = 3;
    let commands = arr[index]
    index++
    while (commands !== "Retire") {
        let splitCommands = commands.split(" ")
        let command = splitCommands[0];
        switch (command) {
            case "Fire":
                let indexOf = Number(splitCommands[1]);
                let damage = Number(splitCommands[2]);
                if (indexOf < 0 || indexOf > warshipArr.length -1) {
                    commands = arr[index];
                    index++
                    continue;
                } else {
                    warshipArr[indexOf] -= damage;
                    if (warshipArr[indexOf] <= 0) {
                        console.log(`You won! The enemy ship has sunken.`)
                        return;
                    }
                }
                break;
            case "Defend":
                let startIndex = Number(splitCommands[1]);
                let endIndex = Number(splitCommands[2]);
                let damages = Number(splitCommands[3]);
                if (startIndex < 0 || endIndex < 0 || startIndex > pirateShipArr.length -1 || endIndex > pirateShipArr.length -1) {
                    commands = arr[index];
                    index++
                    continue;
                } else {
                    for (let i = startIndex; i <= endIndex; i++) {
                        pirateShipArr[i] -= damages;
                        if (pirateShipArr[i] <= 0) {
                            console.log(`You lost! The pirate ship has sunken.`)
                            return;
                        }
                    }
                }
                break;
            case "Repair":
                let aIndex = Number(splitCommands[1]);
                let health = Number(splitCommands[2]);
                if (aIndex < 0 || aIndex > pirateShipArr.length -1){
                    commands = arr[index];
                    index++
                    continue;
                } else{
                    pirateShipArr[aIndex] += health;
                    if (pirateShipArr[aIndex] > maximumHealthCap){
                        pirateShipArr[aIndex] = maximumHealthCap
                    }
                }
                break;
            case "Status":
                let statusCheck = maximumHealthCap * 0.2;
                let newArr = pirateShipArr.filter(a => a < statusCheck);
                console.log(`${newArr.length} sections need repair.`)
        }
        commands = arr[index];
        index++
    }
    console.log(`Pirate ship status: ${pirateShipArr.reduce((sum, element) => sum += element)}`);
    console.log(`Warship status: ${warshipArr.reduce((sum, element) => sum += element)}`);
}
manOWar((["2>3>4>5>2",

"6>7>8>9>10>11",

"20",

"Status",

"Fire 2 3",

"Defend 0 4 11",

"Repair 3 18",

"Retire"]))