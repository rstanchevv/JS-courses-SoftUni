function arrayManipulations(arr){
    let initialNumbers = arr[0].split(" ");
    for (let i = 1; i < arr.length; i++){
        let command = arr[i];
        let splitCommand = command.split(" ");
        switch (splitCommand[0]){
            case "Add":
                initialNumbers.push(splitCommand[1]);
                break;
            case "Remove":
                initialNumbers = initialNumbers.filter(el => el !== splitCommand[1]);
                break;
            case "RemoveAt":
                initialNumbers.splice(splitCommand[1], 1)
                break;
            case "Insert":
                initialNumbers.splice(splitCommand[2], 0, splitCommand[1]);
                break;
        }
    }
    return initialNumbers.join(" ")
}
console.log(arrayManipulations(['6 12 2 65 6 42',

'Add 8',

'Remove 12',

'RemoveAt 3',

'Insert 6 2']))
