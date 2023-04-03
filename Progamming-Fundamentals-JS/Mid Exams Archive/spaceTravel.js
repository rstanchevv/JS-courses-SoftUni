function spaceTravel(arr){
    let travelRouteArr = arr[0].split("||");
    let startingFuel = (Number(arr[1]));
    let startingAmmounition = Number(arr[2]);
    let index = 0;
    let currentCommand = travelRouteArr[index];
    index++
    while (currentCommand !== "Titan"){
        let currentCommandSplit = currentCommand.split(" ");
        switch (currentCommandSplit[0]){
            case "Travel":
                if (startingFuel >= Number(currentCommandSplit[1])){
                    startingFuel -= currentCommandSplit[1];
                    console.log(`The spaceship travelled ${currentCommandSplit[1]} light-years.`);
                } else {
                    console.log(`Mission failed.`);
                    return;
                }
                break;
            case "Enemy":
                if (startingAmmounition >= Number(currentCommandSplit[1])){
                    startingAmmounition -= Number(currentCommandSplit[1]);
                    console.log(`An enemy with ${currentCommandSplit[1]} armour is defeated.`)
                } else {
                    if (startingFuel < Number(currentCommandSplit[1])){
                        console.log(`Mission failed.`);
                        return;
                    }
                    startingFuel -= Number(currentCommandSplit[1]);
                    console.log(`An enemy with ${currentCommandSplit[1]} armour is outmaneuvered.`) 
                }
                break;
            case "Repair":
                startingFuel += Number(currentCommandSplit[1]);
                startingAmmounition += Number(currentCommandSplit[1] * 2);
                console.log(`Ammunitions added: ${currentCommandSplit[1] * 2}.`);
                console.log(`Fuel added: ${currentCommandSplit[1]}.`);
        }
        currentCommand = travelRouteArr[index];
        index++
    }
    console.log(`You have reached Titan, all passengers are safe.`)
}
spaceTravel([ 'Travel 20||Enemy 50||Enemy 50||Enemy 10||Repair 15||Enemy 50||Titan', 
'60', 
'100' ])


