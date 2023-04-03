function thePianist2(arr){
    let numberOfPieces = Number(arr.shift());
    let obj = {};
    for (let i = 0; i < numberOfPieces; i++){
        let [piece,composer,key] = arr[0].split("|");
        obj[piece] = {
            composer,
            key,
        }
        arr.shift();
    }
    let commands = arr.slice();
    let command = commands.shift();
    while (command !== "Stop"){
        let [currentCommand, value1, value2, value3] = command.split("|");
        switch (currentCommand){
            case "Add":
                if (!obj.hasOwnProperty(value1)){
                    obj[value1] = {
                        composer: value2,
                        key: value3,
                    }
                    console.log(`${value1} by ${value2} in ${value3} added to the collection!`);
                } else {
                    console.log(`${value1} is already in the collection!`)
                }
                break;
            case "Remove":
                if (obj.hasOwnProperty(value1)){
                    delete obj[value1];
                    console.log(`Successfully removed ${value1}!`);
                } else {
                    console.log(`Invalid operation! ${value1} does not exist in the collection.`);
                }
                break;
            case "ChangeKey":
                if (obj.hasOwnProperty(value1)){
                    obj[value1].key = value2;
                    console.log(`Changed the key of ${value1} to ${value2}!`)
                } else {
                    console.log(`Invalid operation! ${value1} does not exist in the collection.`);
                }
                break;
        }
        command = commands.shift();
    }
    let keys = Object.keys(obj);
    for (const piece of keys) {
        console.log(`${piece} -> Composer: ${obj[piece].composer}, Key: ${obj[piece].key}`)
    }
}
thePianist2([
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