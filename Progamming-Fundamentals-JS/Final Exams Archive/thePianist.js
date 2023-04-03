function thePianist(input){
    let obj = {};
    let numberOfPieces = Number(input[0]);
    for(let i = 1; i <= numberOfPieces; i++){
        let [piece, composer,key] = input[i].split("|")
        obj[piece] = {};
        obj[piece][composer] = key; 
    }
    let commands = input.slice(numberOfPieces + 1);
    let command = commands.shift();
    while (command !== "Stop"){
        let commandSplit = command.split("|");
        switch(commandSplit[0]){
            case "Add":
                let commandPiece = commandSplit[1];
                let commandComposer = commandSplit[2];
                let commandKey = commandSplit[3];
                if (!obj.hasOwnProperty(commandPiece)){
                    obj[commandPiece] = {};
                    obj[commandPiece][commandComposer] = commandKey;
                    console.log(`${commandPiece} by ${commandComposer} in ${commandKey} added to the collection!`);
                } else {
                    console.log(`${commandPiece} is already in the collection!`)
                }
                break;
            case "Remove":
                let deletePiece = commandSplit[1];
                if (obj.hasOwnProperty(deletePiece)){
                    delete obj[deletePiece]
                    console.log(`Successfully removed ${deletePiece}!`);
                } else {
                    console.log(`Invalid operation! ${deletePiece} does not exist in the collection.`);
                }
                break;
            case "ChangeKey":
                let piece = commandSplit[1];
                let newKey = commandSplit[2];
                if(obj.hasOwnProperty(piece)){
                    let objKey = Object.keys(obj[piece]);
                    obj[piece][objKey] = newKey; 
                    console.log(`Changed the key of ${piece} to ${newKey}!`);
                } else {
                    console.log(`Invalid operation! ${piece} does not exist in the collection.`);
                }
                break;
        }
        command = commands.shift()
    }
    for (const piece of Object.keys(obj)) {
        let entries = Object.entries(obj[piece]);
        result = `${piece} -> `;
        for (const [composer, key] of entries){
            result += `Composer: ${composer}, Key: ${key}`
        }
        console.log(result);
    }
}
thePianist([
    '3',
    'Fur Elise|Beethoven|A Minor',
    'Moonlight Sonata|Beethoven|C# Minor',
    'Clair de Lune|Debussy|C# Minor',
    'Add|Sonata No.2|Chopin|B Minor',
    'Add|Hungarian Rhapsody No.2|Liszt|C# Minor',
    'Add|Fur Elise|Beethoven|C# Minor',
    'Remove|Clair de Lune',
    'ChangeKey|Moonlight Sonata|C# Major',
    'Stop'  
  ]
  )