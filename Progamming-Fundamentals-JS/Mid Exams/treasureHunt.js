function treasureHunt(arr){
    let initialLoot = arr[0].split("|")
    let commands = arr.slice(1);
    let index = 0;
    let currentCommand = commands[index];
    index++
    while (currentCommand != "Yohoho!"){
        let currentCommandSplit = currentCommand.split(" ");
        if (currentCommand.includes("Loot")){
            for (let i = 1; i < currentCommandSplit.length; i++){
                if (initialLoot.indexOf(currentCommandSplit[i]) === -1){
                    initialLoot.unshift(currentCommandSplit[i]);
                }
                else {
                    continue;
                }
            }
        } else if (currentCommand.includes("Drop")){
            if (currentCommandSplit[1] < 0 || currentCommandSplit[1] > initialLoot.length -1){
                currentCommand = commands[index];
                index++
                continue;
            } else{
                let temp = initialLoot[currentCommandSplit[1]];
                initialLoot.splice(currentCommandSplit[1], 1);
                initialLoot.push(temp);
            }
        } else if (currentCommand.includes("Steal")){
            let stolenArr = [];
            for(let i = 0; i < currentCommandSplit[1]; i++){
                if (i > 0){
                    stolenArr.unshift(initialLoot.pop())
                } else {
                    stolenArr.push(initialLoot.pop());
                }
                if (initialLoot.length < 1){
                    break;
                }
            }
            console.log(stolenArr.join(", "))
        }
        currentCommand = commands[index];
        index++
    }
    let sumOfArr = (initialLoot.join('').length / initialLoot.length).toFixed(2);
    console.log(initialLoot.length > 0 ? `Average treasure gain: ${sumOfArr} pirate credits.` : `Failed treasure hunt.`)
}
treasureHunt(["Diamonds|Silver|Shotgun|Gold", "Loot Silver Medals Coal", "Drop -1", "Drop 1", "Steal 6", "Yohoho!"])