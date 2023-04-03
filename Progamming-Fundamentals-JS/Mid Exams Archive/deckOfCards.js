function deckOfCards(arr){
    let listArr = arr[0].split(", ");
    let commands = arr.slice(2);
    for (let i = 0; i < arr[1]; i++){
        let commandSplit = commands[i].split(", ");
        switch (commandSplit[0]){
            case "Add":
                if (listArr.indexOf(commandSplit[1]) === -1){
                    listArr.push(commandSplit[1]);
                    console.log(`Card successfully added`);
                } else {
                    console.log(`Card is already in the deck`)
                }
                break;
            case "Remove":
                if (listArr.indexOf(commandSplit[1]) !== -1){
                    let indexOfCard = listArr.indexOf(commandSplit[1]);
                    listArr.splice(indexOfCard, 1);
                    console.log(`Card successfully removed`);
                } else {
                    console.log(`Card not found`);
                }
                break;
            case "Remove At":
                if (commandSplit[1] < 0 || commandSplit[1] > listArr.length - 1){
                    console.log(`Index out of range`);
                } else {
                    listArr.splice(commandSplit[1], 1);
                    console.log(`Card successfully removed`)
                }
                break;
            case "Insert":
                if (commandSplit[1] < 0 || [commandSplit[1]] > listArr.length - 1){
                    console.log(`Index out of range`);
                } else if (listArr.indexOf(commandSplit[2]) !== -1){
                    console.log(`Card is already added`);
                } else {
                listArr.splice(commandSplit[1], 0, commandSplit[2]);
                console.log(`Card successfully added`)
                break;
                }
                break;
        }
    }
    console.log(listArr.join(", "))
}
deckOfCards(["Ace of Diamonds, Queen of Hearts, King of Clubs",
"3",
"Add, King of Diamonds",
"Insert, 2, Jack of Spades",
"Remove, Ace of Diamonds"])


